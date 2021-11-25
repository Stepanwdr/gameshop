import React from 'react';
import classNames from "classnames";
import "./button.scss"
const Button = ({
    size="s",
    children,
    onClick,
    type
                }) => {
    const btnClass=classNames({
        "btn":true,
        "btn--secondary":type==="secondary",
        "btn--primary":type==="primary",
        "btn--small":type==="s",
        "btn--medium":type==="m"
    })
    return (
        <button className={btnClass}
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;