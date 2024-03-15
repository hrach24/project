import React from 'react';
import classes from "../Header.module.scss";
import classNames from "classnames";

const NAV_LIST = [
    {id: 1, name: 'Home', active: false},
    {id: 2, name: 'Product', active: false},
    {id: 1, name: 'Price', active: true},
    {id: 1, name: 'Contact', active: false},
]
const HeaderLinks = () => {
    return (
        <>
            {
                NAV_LIST.map((item) => (
                    <li className={classes.menu__item} key={item.name}>
                        <a href="/"
                           className={classNames(classes.menu__link, {[classes.active]: item.active})}>
                            {item.name}
                        </a>
                    </li>))
            }
        </>

    );
};

export default HeaderLinks;