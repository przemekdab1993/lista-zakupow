import './ProductList.css'

import ItemList from "./ItemList";

const ProductList = (props) => {
    return (
        <div className={props.className}>
            <ItemList
                name={props.items[0].name}
                quantity={props.items[0].quantity}
                price={props.items[0].price}
                date={props.items[0].date}
                status={props.items[0].status}
            />
            <ItemList
                name={props.items[1].name}
                quantity={props.items[1].quantity}
                price={props.items[1].price}
                date={props.items[1].date}
                status={props.items[1].status}
            />
            <ItemList
                name={props.items[2].name}
                quantity={props.items[2].quantity}
                price={props.items[2].price}
                date={props.items[2].date}
                status={props.items[2].status}
            />
            <ItemList
                name={props.items[3].name}
                quantity={props.items[3].quantity}
                price={props.items[3].price}
                date={props.items[3].date}
                status={props.items[3].status}
            />
            <ItemList
                name={props.items[4].name}
                quantity={props.items[4].quantity}
                price={props.items[4].price}
                date={props.items[4].date}
                status={props.items[4].status}
            />
        </div>
    );
}

export default ProductList;