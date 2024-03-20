import React from 'react';
import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = (props) => {
    return (
            <button type={'button'} className={classNames(classes.finance__buttonsGetQuote, classes.btnStyle)}>{props.text}</button>
    );
};

export default Button;