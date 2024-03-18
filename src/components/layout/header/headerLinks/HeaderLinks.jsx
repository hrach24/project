import React from 'react';
import classes from "../Header.module.scss";
import classNames from "classnames";
import {Link} from "react-router-dom";

const NAV_LIST = [
    {id: 1, name: 'Home', path: '/'},
    {id: 2, name: 'Product', path: '/product'},
    {id: 1, name: 'Price', path: '/price'},
    {id: 1, name: 'Contact', path: '/contact'},
]
const HeaderLinks = () => {
    return (
        <>
            {
                NAV_LIST.map((item) => (
                    <li className={classes.menu__item} key={item.name}>
                        <Link to={item.path}
                           className={classNames(classes.menu__link, {[classes.active]: item.active})}>
                            {item.name}
                        </Link>
                    </li>))
            }
        </>

    );
};

export default HeaderLinks;