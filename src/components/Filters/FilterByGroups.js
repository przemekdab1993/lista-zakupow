import React from "react";

import styles from "./FilterByGroups.module.css";

const FilterByGroups = (props) => {

    const handlerSelectGroup = (event) => {
        const selectedGroup = event.target.value;

        props.onSelectGroup(selectedGroup);
    }

    return (
        <div className={styles["filter-by-group"]}>
            <form onChange={handlerSelectGroup}>
                <div className={styles["form-group"]}>
                    <label htmlFor="inputGroups">Select by Group: </label>
                    <select
                        name="selectGroup"
                        defaultValue={props.defaultVal}
                        id="inputGroups"
                        className={styles["form-control"]}
                    >
                        <option value="all" >All</option>

                        {props.groupsProducts.map( (group) => {
                            return (
                                <option
                                    key={group.id}
                                    value={group.id}
                                >
                                    {group.name}
                                </option>
                            )}
                        )}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default FilterByGroups;