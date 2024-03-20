import React from 'react';
import classes from "./MobileMenu.module.scss";
import classNames from "classnames";

const MobileMenu = (props) => {
    console.log(props.showMenu)
    return (
        <div  className={classNames(classes.styled, props.showMenu ? classes.animate : null)}>
            <div className={classNames(classes.mobileMenu, 'show')}></div>
        </div>
    );
};

export default MobileMenu;