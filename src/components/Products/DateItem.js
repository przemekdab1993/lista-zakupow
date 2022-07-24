import React from "react";

import "./DateItem.css";

const DateItem = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();


    return (
        <div className="item-list__date">
            <div className="item-date__year">{year}</div>
            <div className="item-date__day">{day}</div>
            <div className="item-date__month">{month}</div>
        </div>
    );
}

export default DateItem;