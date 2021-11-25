import React from 'react';
import "./game-buy.scss"
import Button from "../button/button";
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, deleteItemFromCart} from "../../store/action/cart";

const GameBuy = ({game}) => {
    const dispatch = useDispatch()
    let {itemsInCart} = useSelector(state => state.cart)
    let isItemInCart
    console.log(itemsInCart, 222)
    isItemInCart = itemsInCart.some(item => item.id === game.id)
    console.log(isItemInCart, 555)
    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(deleteItemFromCart(game.id))
        } else {
            dispatch(addItemToCart(game))
        }
    }
    return (
        <div className={'game-buy'}>
           <span className={"game-buy__price"}>
               {game.price} AMD.
           </span>
            <Button type={!isItemInCart ? "primary" : "secondary"} onClick={handleClick}>
                {!isItemInCart ? "Add Cart" : "Remove"}
            </Button>
        </div>
    );
};

export default GameBuy;