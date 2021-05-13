import React from "react";


export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) => basket?.reduce((total,item) => total + item.price, 0);

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket,action.item]
            };

        case "DELETE_FROM_BASKET":
            // const index = state.basket.findIndex( (item,ind) => {
            //     return ind === action.id;
            // })

            // const newBasket = [...state.basket];
            // if(index >=0) {
            //     newBasket.splice(index,1);
            // } else {
            //     console.warn(`Product with id: ${action.id} not found`);
            // }

            return {
                ...state,
                basket: state.basket.filter( (item,index) => index !== action.id)
            };

        case "SET_USER":
            return {
                ...state,
                user: action.user
            };

        case "EMPTY__BASKET":
            return {
                ...state,
                basket: []
            };

        default:
            return state;
            
    }
}