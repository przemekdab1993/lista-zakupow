import './ProductsList.css'

import ItemList from "./ItemList";

const ProductsList = (props) => {
    return (
        <div className="product-list">
            {(props.productsList.length === 0) && (
                    <div className="filter-info">
                        <p>No result to show :(</p>
                        <p>Change the filter options or add a new product to the selected category.</p>
                    </div>
                )
            }

            {props.productsList.map( (product) => (
                <ItemList
                    key={product.id}
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