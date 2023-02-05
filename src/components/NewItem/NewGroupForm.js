import React, {useState} from "react";

import styles from "./NewGroupForm.module.css";
import ErrorModal from "../DefaultInterface/ErrorModal";

const NewGroupForm = (props) => {

    const [newItem, setNewItem] = useState({
        enteredName: {
            value: '',
            valid: true
        }
    });

    const [errorMessage, setErrorMessage] = useState({title: '', message: ''});

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
        const newGroupNameValueValid = newItem.enteredName.value.trim();

        setErrorMessage({title: '', message: ''});

        if (newGroupNameValueValid.length === 0) {
            setNewItem( (prevNewItem) => {
                return {
                    ...prevNewItem,
                    enteredName: {
                        ...prevNewItem.enteredName,
                        valid: false
                    }}
            });
            setErrorMessage((prevErrorMessage) => {
                return (
                    {id: 'er'+prevErrorMessage.length, title: "Error", message: 'Value name must by not empty!!!>>>'}
                );

            });
            isValid = false;
        }
        else {
            let repeat = props.produktGroups.filter((group) => {
                return group.name.toLowerCase() === newGroupNameValueValid.toLowerCase();
            });

            if(repeat.length >= 1) {
                setNewItem( (prevNewItem) => {
                    return {
                        ...prevNewItem,
                        enteredName: {
                            ...prevNewItem.enteredName,
                            valid: false
                        }}
                });
                setErrorMessage((prevErrorMessage) => {
                    return (
                    {id: 'er'+prevErrorMessage.length, title: "Error", message: 'Value name is the same as the existing one!!!>>>'}
                );

                });
                isValid = false;
            }
        }
        if (!isValid) {
            return;
        }

        const newGroup = {
            name: newGroupNameValueValid
        }
        props.onSubmitForm(newGroup);

        cancelAdd();
    }

    const cancelAdd = () => {

        resetForm();
        props.onCancelAdd();
    }

    const exitModalChandler = () => {
        setErrorMessage({title: '', message: ''});
    }


    return (
        <div>
            { ((errorMessage.title.length > 0) && (errorMessage.message.length > 0)) &&  (
                <ErrorModal
                    title={errorMessage.title}
                    message={errorMessage.message}
                    onExit={exitModalChandler}
                />
            )}

            <div className={styles[props.className]}>
                <form onSubmit={formHandler}>
                    <div className={`${styles["form-group"]} ${!newItem.enteredName.valid ? styles["invalid"] : ''}`}>
                        <label className={styles["new-item-label"]} htmlFor="label-name">Name</label>
                        <input
                            className={``}
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
        </div>
    );
}

export default NewGroupForm;