import React from 'react';
import classes from "./MobileMenu.module.scss";
import classNames from "classnames";

const MobileMenu = () => {
    return (
        <div  className={classes.styled}>

            <div className={classNames(classes.mobileMenu, 'show')}></div>

        </div>
    );
};

export default MobileMenu;