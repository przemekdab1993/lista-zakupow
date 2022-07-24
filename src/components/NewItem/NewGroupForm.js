import React, {useState} from "react";

import "./NewGroupForm.css";

const NewGroupForm = (props) => {

    const [newItem, setNewItem] = useState({
        enteredName: ''
    });

    const inputChangeHandler = (event) => {

        setNewItem( (prevNewItem) => {
            return { ...prevNewItem,  enteredName: event.target.value}
        });
    }

    const resetForm = () => {
        setNewItem( (prevNewItem) => {
            return { ...prevNewItem,  enteredName: ''}
        });
    }

    const formHandler = (event) => {
        event.preventDefault();

        if (newItem.enteredName === '') {
            return;
        }
        const newGroup = {
            name: newItem.enteredName
        }
        props.onSubmitForm(newGroup);

        cancelAdd();
    }

    const cancelAdd = () => {

        resetForm();
        props.onCancelAdd();
    }


    return (
        <div className={props.className}>
            <form onSubmit={formHandler}>
                <div className="form-group">
                    <label className="new-item-label" htmlFor="label-name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newItem.enteredName}
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