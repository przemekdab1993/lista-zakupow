import React from "react";

import "./FilterByStatus.css";

const FilterByStatus = (props) => {

    const handlerSelectStatus = (event) => {
        const selectedStatus = event.target.value;

        props.onSelectStatus(selectedStatus);
    }

    return (
        <div className="filter-by-status">
            <form onChange={handlerSelectStatus}>
                <div className="form-group">
                    <label htmlFor="inputStatus">Select by Status: </label>
                    <select
                        name="selectStatus"
                        defaultValue={props.defaultVal}
                        id="inputStatus"
                        className="form-control"
                    >
                        <option value="all" >All</option>
                        <option value="1" >New</option>
                        <option value="2" >Processing</option>
                        <option value="3" >Done</option>
                        <option value="4" >Archived</option>
                        <option value="5" >Canceled</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByStatus;