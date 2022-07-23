import React, {useState} from "react";

import "./ProductsPanel.css";
import ProductsList from "./ProductsList";
import ProductsFilters from "../Filters/ProductsFilters";

const ProductsPanel = (props) => {

    const [filterByGroup, setFilterByGroup] = useState("all");

    const filterBG = (product) => {
        if (filterByGroup === "all") {
            return true;
        }

        return product.groups.includes(filterByGroup);
    }

    const filteredByGroup = (group) => {
        setFilterByGroup(group);
    }

    const productsFiltred = props.itemsList.filter(filterBG);

    return (
        <div className="product-panel">
            <ProductsFilters onFilteredByGroup={filteredByGroup} />
            <ProductsList
                productsList={productsFiltred}
            />
        </div>
    )
}

export default ProductsPanel;