import React from "react";

import "./Container.css";

const Container = (props) => {

    let className = 'container ';

    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            {props.children}
        </div>
    );
}

export default Container;