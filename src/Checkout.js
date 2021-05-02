import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

const Checkout = () => {
    const [{ basket },dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Ad poster" className="checkout__ad"/>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {
                    basket?.map((item,index) => {
                        return <CheckoutProduct 
                            title={item.title}
                            image={item.image}
                            id={index}
                            rating={item.rating}
                            price={item.price}
                        />
                    })
                }
                
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
