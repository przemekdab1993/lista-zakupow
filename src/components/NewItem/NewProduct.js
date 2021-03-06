import "./NewProduct.css"
import {useState} from "react";

const NewProduct = (props) => {

    const [newItem, setNewItem] = useState({
        enteredName : '',
        enteredQuantity : '',
        enteredPrice : '',
        enteredDate : new Date,
        enteredGroups : [],
        enteredStatus : 1
    });

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        switch (inputName) {
            case "name" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredName: inputValue
                    }
                });
                break;
            case "quantity" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredQuantity: inputValue
                    }
                });
                break;
            case "price" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredPrice: inputValue
                    }
                });
                break;
        }
    }

    const resetForm = () => {
        setNewItem((prevState) => {
            return {
                ...prevState,
                enteredName: '',
                enteredQuantity: '',
                enteredPrice: '',
            }
        });
    }

    const formHandler = (event) => {
        event.preventDefault();

        if (!newItem.enteredName || !newItem.enteredQuantity || !newItem.enteredPrice) {
            return;
        }

        const newProduct = {
            name: newItem.enteredName,
            quantity: newItem.enteredQuantity,
            price: newItem.enteredPrice,
            date: newItem.enteredDate,
            groups: newItem.enteredGroups,
            status: newItem.enteredStatus
        };

        props.onSubmitForm(newProduct);

        resetForm();
        props.onCancelAdd();
    }

    const cancelAdd = () => {
        props.onCancelAdd();
        resetForm();
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
                <div className="form-group">
                    <label className="new-expense-label" htmlFor="label-price">Quantity</label>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        name="quantity"
                        value={newItem.enteredQuantity}
                        onChange={inputChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label className="new-expense-label" htmlFor="label-dprice">Price</label>
                    <input
                        type="number"
                        min="0.1"
                        step="0.01"
                        name="price"
                        value={newItem.enteredPrice}
                        onChange={inputChangeHandler}
                    />
                </div>

                <button type="submit" >Add Product</button>
                <button onClick={cancelAdd} type="button" >Cancel</button>
            </form>
        </div>
    );
}

export default NewProduct;