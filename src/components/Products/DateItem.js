import React from "react";

import styles from "./DateItem.module.css";

const DateItem = (props) => {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();


    return (
        <div className={styles["item-list__date"]}>
            <div className={styles["item-date__year"]}>{year}</div>
            <div className={styles["item-date__day"]}>{day}</div>
            <div className={styles["item-date__month"]}>{month}</div>
        </div>
    );
}

export default DateItem;