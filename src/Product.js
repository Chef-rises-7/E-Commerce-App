import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

const Product = ({id,title,price,image,rating}) => {
    const [{ basket },dispatch] = useStateValue();
    // console.log(basket);

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                title: title,
                price: price,
                image: image,
                rating: rating,
                id: id
            }
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"> <small>$</small> <strong>{price}</strong></p>
                <div className="product__rating">
                    {Array(rating).fill().map( (_,i) => {
                        return <StarIcon style={{color: "#FFCC00"}}/>
                    })}
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
