import React from 'react';
import classes from "./Button.module.scss";
import classNames from "classnames";

const Button = ({text, orange, transParentGreen, orangeBtnWithoutRadius, transParentOrange}) => {
    return (
        <button
                className={classNames(classes.button,{
                 [classes.orange]: orange,
                 [classes.transParentGreen]: transParentGreen,
                 [classes.orangeBtnWithoutRadius]: orangeBtnWithoutRadius,
                 [classes.transParentOrange]: transParentOrange
            })}
            type={'button'}>{text}</button>
    );
};

export default Button;