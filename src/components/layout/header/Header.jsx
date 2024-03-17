import React from 'react';
import classes from './Header.module.scss'
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import MenuBurger from "../../ui/menuBurger/MenuBurger";
import HeaderLinks from "./headerLinks/HeaderLinks";

const Header = () => {
    const tabletScreenWidth = useMediaQuery({query: '(max-width: 1024px)'});
    const tabletScreenWidthTrueFalse = tabletScreenWidth ? 'mobileMenu' : 'container'
    return (
        <>
            <header className={classes.header}>
                <div className={classNames(classes.header__container, tabletScreenWidthTrueFalse)}>
                    <div className={classes.header__logo}>
                        Relvise
                    </div>
                    <nav className={`${classes.menu__navigation} menu`}>
                        <ul className={classes.menu__list}>
                            {tabletScreenWidth ? <MenuBurger /> : <HeaderLinks />}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
};

export default Header;