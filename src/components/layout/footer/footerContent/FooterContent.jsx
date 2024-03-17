import React from 'react';
import classes from './FooterContent.module.scss'
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import DesktopAndTabletFooter from "./desktopAndTabletFooter/DesktopAndTabletFooter";
import MobileFooter from "./mobileFooter/MobileFooter";
const FooterContent = () => {
    const checkWidth = useMediaQuery({query: '(max-width: 912px)'});

    return (
        <div className={classes.links}>
            <div className={classNames(classes.links_container, 'container')}>
                <div className={classes.listHolder}>
                    {checkWidth ? <MobileFooter /> : <DesktopAndTabletFooter />}
                </div>
            </div>
        </div>
    );
};

export default FooterContent;