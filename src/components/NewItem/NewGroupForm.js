import React, {useState, useRef} from "react";

import styles from "./NewGroupForm.module.css";
import Modal from "../DefaultInterface/Modal/Modal";

const NewGroupForm = (props) => {

    const [errorMessage, setErrorMessage] = useState({title: '', message: ''});
    const [isValid, setIsValid] = useState(true);
    const refInputNameGroup = useRef();

    const formHandler = (event) => {
        event.preventDefault();

        const newGroupNameValueValid = refInputNameGroup.current.value.trim();
        let invalid = false;

        setErrorMessage({title: '', message: ''});

        if (newGroupNameValueValid.length === 0) {
            setErrorMessage((prevErrorMessage) => {
                return (
                    {title: "Error", message: 'Value name must by not empty!!!>>>'}
                );

            });
            invalid = true;
        }
        else {
            let repeat = props.produktGroups.filter((group) => {
                return group.name.toLowerCase() === newGroupNameValueValid.toLowerCase();
            });

            if(repeat.length >= 1) {
                setErrorMessage((prevErrorMessage) => {
                    return (
                        {title: "Error", message: 'Value name is the same as the existing one!!!>>>'}
                    );
                });
                invalid = true;
            }
        }
        if (invalid) {
            setIsValid(prevState => false);
            return;
        }

        const newGroup = {
            name: newGroupNameValueValid
        }
        props.onSubmitForm(newGroup);

        cancelAdd();
    }

    const cancelAdd = () => {
        refInputNameGroup.current.value = '';
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
                    <div className={`${styles["form-group"]} ${!isValid ? styles["invalid"] : ''}`}>
                        <label className={styles["new-item-label"]} htmlFor="label-name">Name</label>
                        <input
                            className={``}
                            type="text"
                            name="name"
                            ref={refInputNameGroup}
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