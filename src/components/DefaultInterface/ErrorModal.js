import React from "react";

import styles from "./ErrorModal.module.css";

import Card from "./Card";

const ErrorModal = (props) => {

    const splitMessages = props.message.split('>>>');

    return (
        <div>
            <div className={styles["backdrop"]} onClick={props.onExit}></div>
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
                    <button className={styles["btn-footer"]} onClick={props.onExit}>Okey</button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;