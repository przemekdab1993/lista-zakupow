import React, {useState} from "react";

import styles from "./NewProductForm.module.css";
import Modal from "../DefaultInterface/Modal/Modal";

const NewProductForm = (props) => {

    const [newItem, setNewItem] = useState({
        enteredName : {
            value : '',
            isValid : true
        },
        enteredQuantity : {
            value : '',
            isValid :  true
        },
        enteredPrice : {
            value : '',
            isValid : true
        },
        enteredDate : {
            value : new Date
        },
        enteredGroups : {
            value : []
        },
        enteredStatus : {
            value : 1
        }
    });

    const [errorMessage, setErrorMessage] = useState({title: '', message: ''});

    const inputChangeHandler = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;

        switch (inputName) {
            case "name" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredName : {
                            value : inputValue,
                            isValid: true
                        }
                    }
                });
                break;

            case "quantity" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredQuantity: {
                            value : inputValue,
                            isValid : true
                        }
                    }
                });
                break;

            case "price" :
                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredPrice: {
                            value : inputValue,
                            isValid : true
                        }
                    }
                });
                break;

            case "selectGroup" :
                if (inputValue === '') {
                    return;
                }

                setNewItem((prevState) => {
                    return {
                        ...prevState,
                        enteredGroups: {
                            value : [inputValue]
                        }
                    }
                });
                break;
        }
    }

    const resetForm = () => {
        setNewItem((prevState) => {
            return {
                ...prevState,
                enteredName: {
                    value : '',
                    isValid : true
                },
                enteredQuantity: {
                    value : '',
                    isValid : true
                },
                enteredPrice: {
                    value : '',
                    isValid : true
                },
            }
        });
    }

    const formHandler = (event) => {
        event.preventDefault();
        let isValid = true;

        setErrorMessage({title: '', message: ''});

        if (newItem.enteredName.value.trim().length === 0) {
            setNewItem((prevState) => {
                return {
                    ...prevState,
                    enteredName : {
                        ...prevState.enteredName,
                        isValid: false
                    }
                }
            });
            setErrorMessage((prevErrorMessage) => {
                return (
                    {title: "Error", message: prevErrorMessage.message + 'Value Name must by not empty!!!!!!>>>'}
                )
            });
            isValid = false;
        }
        if (newItem.enteredQuantity.value.trim().length === 0 || +(newItem.enteredQuantity.value) <= 0 ) {
            setNewItem((prevState) => {
                return {
                    ...prevState,
                    enteredQuantity : {
                        ...prevState.enteredQuantity,
                        isValid: false
                    }
                }
            });
            setErrorMessage((prevErrorMessage) => {
                return (
                    {title: "Error", message: prevErrorMessage.message + 'Value Quantity must by not empty and above zero!!!>>>' }
                );
            });
            isValid = false;
        }
        if (newItem.enteredPrice.value.trim().length === 0 || +(newItem.enteredPrice.value) <= 0) {
            setNewItem((prevState) => {
                return {
                    ...prevState,
                    enteredPrice : {
                        ...prevState.enteredPrice,
                        isValid: false
                    }
                }
            });
            setErrorMessage((prevErrorMessage) => {
                return (
                    {title: "Error", message: prevErrorMessage.message + 'Value Price must by not empty!!!!!!>>>'}
                );
            });

            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const newProduct = {
            name: newItem.enteredName.value.trim(),
            quantity: newItem.enteredQuantity.value,
            price: newItem.enteredPrice.value,
            date: newItem.enteredDate.value,
            groups: newItem.enteredGroups.value,
            status: newItem.enteredStatus.value
        };
        props.onSubmitForm(newProduct);

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
                <Modal
                    title={errorMessage.title}
                    message={errorMessage.message}
                    onExit={exitModalChandler}
                />
            )}
            <div className={styles[props.className]}>
                <form onSubmit={formHandler}>
                    <div className={`${styles["form-group"]} ${!newItem.enteredName.isValid ? styles.invalid : ""}`}>
                        <label className={styles["new-product-label"]} htmlFor="label-name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={newItem.enteredName.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className={`${styles["form-group"]} ${!newItem.enteredQuantity.isValid ? styles.invalid : ""}`}>
                        <label className={styles["new-product-label"]} htmlFor="label-quantity">Quantity</label>
                        <input
                            type="number"
                            step="1"
                            name="quantity"
                            value={newItem.enteredQuantity.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className={`${styles["form-group"]} ${!newItem.enteredPrice.isValid ? styles.invalid : ""}`}>
                        <label className={styles["new-product-label"]} htmlFor="label-price">Price</label>
                        <input
                            type="number"
                            step="0.01"
                            name="price"
                            value={newItem.enteredPrice.value}
                            onChange={inputChangeHandler}
                        />
                    </div>
                    <div className={styles["form-group"]}>
                        <label className={styles["new-product-label"]} htmlFor="label-selectGroup">Group</label>
                        <select
                            name="selectGroup"
                            defaultValue="unset"
                            className={styles["form-control"]}
                            onChange={inputChangeHandler}
                        >
                            <option value="" >Unset</option>

                            {props.produktGroups.map( (group) => { return (
                                    <option key={group.id} value={group.id} >{group.name}</option>
                                )}
                            )}
                        </select>
                    </div>

                    <button type="submit" >Add Product</button>
                    <button onClick={cancelAdd} type="button" >Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default NewProductForm;