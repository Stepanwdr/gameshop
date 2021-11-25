import React, {useState} from 'react';
import "./cart-block.scss"
import {BiCartAlt} from "react-icons/bi";
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../../utils/CalcTotalPrice";
import CartMenu from "../cart-menu/cart-menu";
import ItemsInCart from "../items-in-cart/items-in-cart";

const CartBlock = () => {
    const {itemsInCart} = useSelector(state => state.cart)
    const [isVisible, setCartVisible] = useState(false)
    const totalPrice = calcTotalPrice(itemsInCart)
    return (
        <div className={"cart-block"} onClick={() => setCartVisible(!isVisible)}>
            {itemsInCart.length > 0 ? <ItemsInCart quantity={itemsInCart.length}/> : null}
            <BiCartAlt size={25} className={"cart-block__icon"}/>
            {itemsInCart.length > 0 ? <span className={"cart-block__total-price"}>{totalPrice} AMD</span> : null}
            {isVisible ? <CartMenu onClick={() => null} items={itemsInCart}
                                   setCartVisible={() => setCartVisible(!isVisible)}/> : null}
        </div>
    );
};

export default CartBlock;