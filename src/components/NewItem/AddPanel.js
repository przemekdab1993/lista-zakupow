import React, {useState} from "react";

import "./AddPanel.css";
import NewProduct from "./NewProduct";

const AddPanel = (props) => {

    const [contentForm, setContentForm] = useState('');

    const showAddProduct = () => {
        setContentForm(formNewProduct);
    }
    const showAddGroup = () => {
        console.log("sss");
    }
    const hideForm = () => {
        setContentForm('');
    }

    const submitProductForm = (newProduct) => {
        props.onNewProduct(newProduct);
    }

    const formNewProduct = (<NewProduct onCancelAdd={hideForm} onSubmitForm={submitProductForm}/>);

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