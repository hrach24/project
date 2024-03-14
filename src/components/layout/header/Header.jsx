import React from 'react';
import classes from './Header.module.scss'
import classNames from "classnames";

const NAV_LIST = [
    {id: 1, name: 'Home', active: false},
    {id: 2, name: 'Product', active: false},
    {id: 1, name: 'Price', active: true},
    {id: 1, name: 'Contact', active: false},
]


const Header = () => {

    return (
        <>
            <header className={classes.header}>
                <div className={classNames(classes.header__container, 'container')}>
                    <div className={classes.header__logo}>
                        Relvise
                    </div>
                    <nav className={`${classes.menu__navigation} menu`}>
                        <ul className={classes.menu__list}>
                            {
                                NAV_LIST.map((item) => (
                                    <li className={classes.menu__item} key={item.name}>
                                        <a href="/"
                                           className={classNames(classes.menu__link, {[classes.active]: item.active})}>
                                            {item.name}
                                        </a>
                                    </li>))
                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header;