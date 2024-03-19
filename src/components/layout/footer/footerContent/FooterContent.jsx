import React from 'react';
import classes from './FooterContent.module.scss'
import classNames from "classnames";
import ContentFooter from "./contentFooter/ContentFooter";

const FooterContent = () => {
    return (
        <div className={classes.links}>
            <div className={classNames(classes.links_container, 'container')}>
                <div className={classes.listHolder}>
                    <ContentFooter />
                </div>
            </div>
        </div>
    );
};

export default FooterContent;