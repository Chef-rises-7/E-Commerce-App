import React, { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";



const FunctionalProduct = forwardRef(({ id,title,image,rating,price}, ref) => (
    <div ref={ref}>
        <CheckoutProduct
        key={id}
        id={id}
        title={title}
        image={image}
        rating={rating}
        price={price} />
    </div>
  ));

const DisplayProducts = () => {
    const [{basket},dispatch] = useStateValue();
    return (
        <FlipMove 
        staggerDelayBy={20}
          enterAnimation={{
            from: {
              transform: "rotateX(180deg)",
              opacity: 0.1
            },
            to: {
              transform: ""
            }
          }}
          leaveAnimation={{
            from: {
              transform: ""
            },
            to: {
              transform: "translateX(50%)",
              opacity: 0.1
            }
          }}
        >
            {
                basket?.map( (item,index) => {
                    return (
                        <FunctionalProduct key={index} 
                        id={index}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                    )
                })
            }
        </FlipMove>
    )
}

export default DisplayProducts
