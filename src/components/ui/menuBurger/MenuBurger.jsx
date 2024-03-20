import React, {useState} from 'react';
import mobileIcon from '../../../assets/img/mobileIcon.png'
import classes from './MenuBurger.module.scss';
import MobileMenu from "../../layout/header/mobileMenu/MobileMenu";
import {createPortal} from "react-dom";


const MenuBurger = () => {
    const [showMenu, changeTheState] = useState(false)
    function showMobileMenu () {
        changeTheState(true);
        window.document.body.style.overflow = 'hidden';
    }
    return (
        <>
            <img src={mobileIcon} alt="MenuIcon" onClick={showMobileMenu}/>
            { showMenu && createPortal(<MobileMenu showMenu={ showMenu }/>, document.body)  }
        </>



    );
};

export default MenuBurger;