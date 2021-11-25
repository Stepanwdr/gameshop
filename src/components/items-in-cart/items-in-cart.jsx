import React from 'react';
import "./items-in-cart.scss"
const ItemsInCart = ({quantity}) => {
    return (
        <span className={"items-in-cart"}>
         {quantity}
        </span>
    );
};

export default ItemsInCart;