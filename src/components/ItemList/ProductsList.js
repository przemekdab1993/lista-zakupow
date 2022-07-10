import './ProductsList.css'

import ItemList from "./ItemList";

const ProductsList = (props) => {
    return (
        <div className="product-list">
            {props.productsList.map(product => (
                <ItemList
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    date={product.date}
                    status={product.status}
                />
            ))}

        </div>
    );
}

export default ProductsList;