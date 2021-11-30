import React from 'react';
import "./order-page.scss"
import {useSelector} from "react-redux";
import OrderItem from "../../components/order-item/order-item";
import {calcTotalPrice} from "../../utils/CalcTotalPrice";

const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
    if (items.length < 1) {
        return <h1 className={"order-page__cart-status"}>Your Cart Is Empty</h1>
    }
    return (
        <div className={'order-page'}>
            <div className="order-page__content">
                <div className="order-page__left">
                    {items.map(game => <OrderItem game={game}/>)}
                </div>
            </div>
            <div className="order-page__total-price">
                {items.length} items total sum <span>{calcTotalPrice(items)}</span>
            </div>
        </div>
    );
}

export default OrderPage;