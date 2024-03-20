import React from 'react';
import classes from "./GreenButton.module.scss";
import classNames from "classnames";

const GreenButton = () => {
    return (
        <button type={'button'} className={classNames(classes.btnStyle, classes.finance__buttonsLearnMore, "greenButton")}>Learn More</button>
    );
};

export default GreenButton;