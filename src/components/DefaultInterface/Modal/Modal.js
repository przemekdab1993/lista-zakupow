import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

import ErrorModal from "./ErrorModal";
import Backdrop from "./Backdrop";

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop
                    onExit={props.onExit}
                />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ErrorModal
                    onExit={props.onExit}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
}

export default Modal;