import React, {useState} from "react";
import './ItemList.css';

const ItemList = (props) => {
    const [itemStatus, setItemStatus] = useState(props.status)


    const deleteItem = () => {
        setItemStatus(itemStatus + 1);
    }

    return (
        <div className="item-list">
            <div className="item-list__name">{props.name}</div>
            <div className="item-list__quantity">{props.quantity}</div>
            <div className="item-list__price">${props.price}</div>
            <div className="item-list__date">{props.date.toISOString()}</div>
            <div className="item-list__status">{itemStatus}</div>
            <button onClick={deleteItem} >=></button>
        </div>
    );
}

export default ItemList;