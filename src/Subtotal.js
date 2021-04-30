import React from 'react';
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal (0 items): <strong>{value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                        </>
                )}
                decimalScale={2}
                value={10}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Click to Checkout</button>
        </div>
    )
}

export default Subtotal;    
