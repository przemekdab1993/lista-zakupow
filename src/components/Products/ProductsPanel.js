import React, {useState} from "react";

import styles from "./ProductsPanel.module.css";

import ProductsList from "./ProductsList";
import ProductsFilters from "../Filters/ProductsFilters";

const ProductsPanel = (props) => {

    const [filterByGroup, setFilterByGroup] = useState("all");
    const [filterByStatus, setFilterByStatus] = useState("all");

    // filter by group
    const filterBG = (product) => {
        if (filterByGroup === "all") {
            return true;
        }
        return product.groups.includes(filterByGroup);
    }
    // filter by status
    const filterBS = (product) => {
        if (filterByStatus === "all") {
            return true;
        }
        if (product.status == filterByStatus) {
            return true;
        }
        return false;
    }

    const filteredByGroup = (group) => {
        setFilterByGroup(group);
    }
    const filteredByStatus = (status) => {
        setFilterByStatus(status);
    }
    const changeProduct = (product) => {
        props.onChangeProduct(product);
    }

    const productsFiltered = props.itemsList.filter(filterBG).filter(filterBS);


    return (
        <div className={styles["product-panel"]}>
            <ProductsFilters
                groupsProducts={props.groupsProducts}
                defaultGroupFilter={filterByGroup}
                defaultStatusFilter={filterByStatus}
                onFilteredByGroup={filteredByGroup}
                onFilteredByStatus={filteredByStatus}
            />
            <ProductsList
                productsList={productsFiltered}
                onChangeProduct={changeProduct}
            />
        </div>
    )
}

export default ProductsPanel;