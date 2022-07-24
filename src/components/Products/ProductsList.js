import './ProductsList.css'

import ListItem from "./ListItem";

const ProductsList = (props) => {
    const changeStatusProduct = (product) => {
        props.onChangeProduct(product);
    }

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
                <ListItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    quantity={product.quantity}
                    price={product.price}
                    date={product.date}
                    status={product.status}
                    onChangeStatus={changeStatusProduct}
                />
            ))}
        </div>
    );
}

export default ProductsList;