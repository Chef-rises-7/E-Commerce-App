import React from 'react';
import DisplayProducts from './DisplayProducts';
import "./Payment.css";
import { useStateValue } from './StateProvider';

const Payment = () => {
    const [{user},dispatch] = useStateValue();
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
                        <h2>ok frand</h2>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Payment
