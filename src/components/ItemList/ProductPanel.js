import React from "react";

import "./ProductPanel.css";
import ProductsList from "./ProductsList";

const ProductPanel = (props) => {
    return (
        <div className="product-panel">
            <ProductsList
                productsList={props.itemsList}
            />
        </div>
    )
}

export default ProductPanel;