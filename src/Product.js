import React from 'react';
import "./Product.css";
import StarIcon from '@material-ui/icons/Star';

const Product = ({title,price,image,rating}) => {
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
            <button>Add to cart</button>
        </div>
    )
}

export default Product
