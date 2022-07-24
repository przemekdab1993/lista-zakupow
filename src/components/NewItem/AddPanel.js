import React, {useState} from "react";

import "./AddPanel.css";
import NewProductForm from "./NewProductForm";
import NewGroupForm from "./NewGroupForm";

const AddPanel = (props) => {

    const [contentForm, setContentForm] = useState('');

    const showAddProduct = () => {
        setContentForm(formNewProduct);
    }
    const showAddGroup = () => {
        setContentForm(formNewGroup);
    }
    const hideForm = () => {
        setContentForm('');
    }

    const submitProductForm = (newProduct) => {
        props.onNewProduct(newProduct);
    }
    const submitGroupForm = (newGroup) => {
        props.onNewGroup(newGroup);
    }

    const formNewProduct = (<NewProductForm onCancelAdd={hideForm} onSubmitForm={submitProductForm}/>);
    const formNewGroup = (<NewGroupForm onCancelAdd={hideForm} onSubmitForm={submitGroupForm}/>);

    return (
        <div className="add-panel">

            {!contentForm ? (
                <div className="nav-panel">
                    <button id="showAddProduct" onClick={showAddProduct} >Add new Product</button>
                    <button id="showAddGroup" onClick={showAddGroup} >Add new Group</button>
                </div>
            ) : (
                contentForm
            )}
        </div>
    )
}

export default AddPanel;