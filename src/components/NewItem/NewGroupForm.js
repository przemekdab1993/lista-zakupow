import React, {useState} from "react";

import styles from "./NewGroupForm.module.css";

const NewGroupForm = (props) => {

    const [newItem, setNewItem] = useState({
        enteredName: {
            value: '',
            valid: true
        }
    });

    const inputChangeHandler = (event) => {

        setNewItem( (prevNewItem) => {
            return {
                ...prevNewItem,
                enteredName: {
                    ...prevNewItem.enteredName,
                    value: event.target.value,
                    valid: true
                }}
        });
    }

    const resetForm = () => {
        setNewItem( (prevNewItem) => {
            return {
                ...prevNewItem,
                enteredName: {
                    value: '',
                    valid: true
                }}
        });
    }

    const formHandler = (event) => {
        event.preventDefault();

        let isValid = true;

        if (newItem.enteredName.value.trim().length === 0) {
            setNewItem( (prevNewItem) => {
                return {
                    ...prevNewItem,
                    enteredName: {
                        ...prevNewItem.enteredName,
                        valid: false
                    }}
            });

            isValid = false;
        }
        if (!isValid) {
            return;
        }

        const newGroup = {
            name: newItem.enteredName.value
        }
        props.onSubmitForm(newGroup);

        cancelAdd();
    }

    const cancelAdd = () => {

        resetForm();
        props.onCancelAdd();
    }


    return (
        <div className={styles[props.className]}>
            <form onSubmit={formHandler}>
                <div className={`${styles["form-group"]} ${!newItem.enteredName.valid ? styles["invalid"] : ''}`}>
                    <label className={styles["new-item-label"]} htmlFor="label-name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newItem.enteredName.value}
                        onChange={inputChangeHandler}
                    />
                </div>

                <button type="submit" >Add Group</button>
                <button onClick={cancelAdd} type="button" >Cancel</button>
            </form>
        </div>
    );
}

export default NewGroupForm;