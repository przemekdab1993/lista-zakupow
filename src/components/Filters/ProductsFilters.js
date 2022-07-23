import React from "react";

import "./ProductsFilters.css";

import Card from "../DefaultInterface/Card";
import FilterByGroups from "./FilterByGroups";
import FilterByStatus from "./FilterByStatus";

const ProductsFilters = (props) => {

    const selectedGroup = (group) => {
        props.onFilteredByGroup(group);
    }
    const selectedStatus = (status) => {
        props.onFilteredByStatus(status);
    }

    return (
        <Card className="panel-filters">
            <FilterByStatus
                defaultVal={props.defaultStatusFilter}
                onSelectStatus={selectedStatus}
            />
            <FilterByGroups
                defaultVal={props.defaultGroupFilter}
                groupsProducts={props.groupsProducts}
                onSelectGroup={selectedGroup}
            />
        </Card>
    );
}

export default ProductsFilters;