import React from "react";

import styles from "./ErrorModal.module.css";

import Card from "./Card";

const ErrorModal = (props) => {

    const clickExitChandler = () => {
        props.onExit();
    }
    const splitMessages = props.message.split('>>>');

    console.log(splitMessages.length);

    return (
        <div>
            <div className={styles["backdrop"]} onClick={clickExitChandler}></div>
            <Card className={styles["modal"]} >
                <header className={styles["header"]}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles["content"]}>
                    {splitMessages.map((message) => {
                        return (
                            <p>{message}</p>
                        )
                    })}
                </div>
                <footer className={styles["actions"]}>
                    <button className={styles["btn-footer"]} onClick={clickExitChandler}>Okey</button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;