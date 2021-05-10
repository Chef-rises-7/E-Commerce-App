import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import DisplayProducts from './DisplayProducts';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import axios from "./axios";

const Payment = () => {
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();

    const [{basket,user},dispatch] = useStateValue();
    const [disabled,setDisabled] = useState(true);
    const [error,setError] = useState(null);
    const [processing,setProcessing] = useState("");
    const [succeeded,setSucceeded] = useState(false);
    const [clientSecret,setClientSecret] = useState(true);

    // useEffect( () => {
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: "post",
    //             url: `payments/create?total=${getBasketTotal(basket)*100}`
    //         });
    //         setClientSecret(response.data.clientSecret);
    //     }
    //     getClientSecret();
    // },[basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace("/orders");
        })
    };

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>User's Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>italy ma fffrands</p>
                        <p>{user?.email}</p>
                        <p>69696969</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review of your cart</h3>
                    </div>
                    <div className="payment__items">
                        <DisplayProducts />
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p>Order Total: {value}</p>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    {processing ? <p>Processing</p> : "Buy Now"}
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
