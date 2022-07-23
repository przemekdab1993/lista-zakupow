import React, {useState} from "react";

import './ItemList.css';
import DateItem from "./DateItem";
import Card from "../DefaultInterface/Card";

const ItemList = (props) => {
    const [itemStatus, setItemStatus] = useState(props.status)


    const changeStatus = () => {
        setItemStatus(itemStatus + 1);
    }

    return (
        <Card className="item-list">
            <div className="item-list__name">{props.name}</div>
            <div className="item-list__quantity">{props.quantity}</div>
            <div className="item-list__price">${props.price}</div>
            <DateItem date={props.date} />
            <div className="item-list__status">{itemStatus}</div>
            <button className="btn-change-status" onClick={changeStatus} >>></button>
        </Card>
    );
}

export default ItemList;