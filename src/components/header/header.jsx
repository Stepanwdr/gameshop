import React from 'react';
import {Link} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/RoutesConsts";

import "./header.scss"
import CartBlock from "../cart-block/cart-block";
const Header = () => {
    return (
        <div className={'header'}>
            <div className="wrapper">
                <Link to={HOME_ROUTE} className={"header__store-title"}>Game Store</Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    );
};

export default Header;