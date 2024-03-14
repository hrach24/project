import React from 'react';
import classes from "./Button.module.scss";

const Button = () => {
    return (
        <div className={classes.finance__buttons}>
            <button type={'button'} className={`${classes.finance__buttonsGetQuote} ${classes.btnStyle}`}>Get Quote Now</button>
            <button type={'button'} className={`${classes.btnStyle} ${classes.finance__buttonsLearnMore}`}>Learn More</button>
        </div>
    );
};

export default Button;