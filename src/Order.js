import React from 'react';
import "./Order.css";
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';

const Order = ({ order }) => {
    return (
        <div className="order">
            <p>Order ID</p>
            <p className="order__id"><strong>{order.id}</strong></p>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

            {
                order.data.basket?.map( item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        rating={item.rating}
                        price={item.price}
                        hideRmBtn={true} />
                ))
            }
            <p className="order__total"> Order Total: <strong>{order.data.amount / 100}</strong> </p>
        </div>
    )
}

export default Order
