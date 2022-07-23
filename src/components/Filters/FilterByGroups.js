import React from "react";

import "./FilterByGroups.css";

const FilterByGroups = (props) => {

    const handlerSelectGroup = (event) => {
        const selectedGroup = event.target.value;

        props.onSelectGroup(selectedGroup);
    }

    return (
        <div className="filter-by-group">
            <form onChange={handlerSelectGroup}>
                <div className="form-group">
                    <label htmlFor="inputGroups">Select by Group: </label>
                    <select name="selectGroup" defaultValue="all" id="inputGroups" className="form-control">
                        <option value="all" >All</option>
                        <option value="g1" >Soup</option>
                        <option value="g2" >Sandwiches</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByGroups;