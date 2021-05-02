import React from 'react';
import "./CheckoutProduct.css";
import StarIcon from '@material-ui/icons/Star';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id,title,image,rating,price}) => {
    const [{ basket },dispatch] =  useStateValue();
    const deleteBasketItem = () => {
        dispatch({
            type: "DELETE_FROM_BASKET",
            id: id
        });
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="Checkout_product_img"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p><small>$</small> <strong>{price}</strong> </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => <StarIcon style={{color: "#FFCC00"}}/>)}
                </div>
                <div className="checkoutProduct__button">
                    <p>Remove From Basket</p> <button onClick={deleteBasketItem}><DeleteOutlineIcon /></button>
                </div>
                
            </div>
        </div>
    )
}

export default CheckoutProduct;
