import React from "react";

import "./Card.css";

const Card = (props) => {

    let className = 'card';

    if (props.className) {
        className += ' ' + props.className;
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Card;