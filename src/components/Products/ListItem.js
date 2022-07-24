import React from "react";

import './ListItem.css';

import DateItem from "./DateItem";
import Card from "../DefaultInterface/Card";

const ListItem = (props) => {


    const changeStatus = () => {
        const newStatus = {
            id: props.id,
            status: props.status + 1
        };

        props.onChangeStatus(newStatus);
    }

    return (
        <Card className="item-list">
            <div className="item-list__name">{props.name}</div>
            <div className="item-list__quantity">{props.quantity}</div>
            <div className="item-list__price">${props.price}</div>
            <DateItem date={props.date} />
            <div className="item-list__status">{props.status}</div>
            <button className="btn-change-status" onClick={changeStatus} >>></button>
        </Card>
    );
}

export default ListItem;