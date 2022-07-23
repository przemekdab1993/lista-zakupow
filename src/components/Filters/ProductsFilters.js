import React from "react";

import "./ProductsFilters.css";
import Card from "../DefaultInterface/Card";
import FilterByGroups from "./FilterByGroups";

const ProductsFilters = (props) => {

    const selectedGroup = (group) => {
        props.onFilteredByGroup(group);
    }

    return (
        <Card className="panel-filters">
            <FilterByGroups onSelectGroup={selectedGroup} />
        </Card>
    );
}

export default ProductsFilters;