import './ItemList.css';

function ItemList(props) {
    return (
        <div className="item-list">
            <div className="item-list__name">{props.name}</div>
            <div className="item-list__quantity">{props.quantity}</div>
            <div className="item-list__price">${props.price}</div>
            <div className="item-list__date">{props.date.toISOString()}</div>
            <div className="item-list__status">{props.status}</div>
        </div>
    );
}

export default ItemList;