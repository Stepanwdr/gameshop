import React from 'react';
import "./order_item.scss"
import GameCover from "../game-cover/game-cover";
import { AiOutlineCloseCircle} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {deleteItemFromCart} from "../../store/action/cart";


const OrderItem = ({game}) => {
    const dispatch=useDispatch()
    const handleClick=()=>{
dispatch(deleteItemFromCart(game.id))

    }
    return (
        <div className={"order-item"}>
<div className="order-item__cover">
    <GameCover image={game.image}/>
</div>
            <div className="order-item__title">
                {game.title}
            </div>
            <div className="order-item__left">
                <div className="order-item__price">
                    {game.price} AMD
                </div>
                <AiOutlineCloseCircle
                    size={25}
                    className={"cart-item__delete-icon"}
                    onClick={handleClick}
                />
            </div>

        </div>
    );
};

export default OrderItem;