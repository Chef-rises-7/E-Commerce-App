import React from "react";


export const initialState = {
    basket: []
};

export const getBasketTotal = (basket) => basket?.reduce((total,item) => total + item.price, 0);

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item]
            };

        default:
            return state;
            
    }
}