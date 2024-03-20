import React from 'react';
import classes from './FooterContent.module.scss'
import classNames from "classnames";
import ContentFooter from "./contentFooter/ContentFooter";

const FooterContent = () => {
    return (
        <div className={classes.links}>
                <div className={classNames(classes.listHolder, "container")}>
                    <ContentFooter />
                </div>
        </div>
    );
};

export default FooterContent;