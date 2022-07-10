import "./NewItem.css"
import {useState} from "react";

const NewItem = (props) => {

    const enteredData = new Date;
    const enteredStatus = 1;

    const [newItem, setNewItem] = useState({
        enteredName : '',
        enteredQuantity : '',
        enteredPrice : '',
        enteredData : new Date,
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

    const formChandler = (event) => {
        event.preventDefault();
        console.log(newItem);
    }

    return (
        <div className={props.className}>
            <form onSubmit={formChandler}>
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

                <button type="submit" >Dodaj produkt</button>
            </form>
        </div>
    );
}

export default NewItem;