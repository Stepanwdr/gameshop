import React from 'react';
import {calcTotalPrice} from "../../utils/CalcTotalPrice";
import Button from "../button/button";
import "./cart-menu.scss"
import {useHistory} from "react-router-dom";
import {ORDER_ROUTE} from "../../utils/RoutesConsts";
const CartMenu = ({items }) => {
    const history=useHistory()
    const totalPrice=calcTotalPrice(items)
    const handleClick=()=>{
        history.push(ORDER_ROUTE)
    }
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
                    <Button type={"primary"} onClick={handleClick}>Check Order</Button>
                </div> : "Cart is Empty"
            }
        </div>
    );
};

export default CartMenu;