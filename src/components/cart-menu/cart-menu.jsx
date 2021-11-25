import React from 'react';
import {calcTotalPrice} from "../../utils/CalcTotalPrice";
import Button from "../button/button";
import "./cart-menu.scss"
const CartMenu = ({items, onClick}) => {
    const totalPrice=calcTotalPrice(items)
    return (
        <div className={'cart-menu'}>
            {    items.map(game =>
            <div className="cart-menu__game-list" key={game.title}>
                <div className={"cart-menu__game-img"} style={{backgroundImage:`url(${game.image})`}}>
                </div>
               <div className={"cart-menu__game-title"}>
                    {game.title}
                </div>
                    <div className={"cart-menu__game-price"}>
                {game.price} AMD
                    </div>
            </div>
            )}
            {
                items.length ? <div className={"cart-menu__arrange"}>
                    <div className="cart-menu__total-price">
                        {totalPrice} AMD
                    </div>
                    <Button type={"primary"} onClick={onClick}>Order</Button>
                </div> : "Cart is Empty"
            }
        </div>
    );
};

export default CartMenu;