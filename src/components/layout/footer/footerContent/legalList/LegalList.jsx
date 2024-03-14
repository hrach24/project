import React from 'react';
import classes from "./LegalList.module.scss";

const LegalList = () => {
    return (
        <ul className={classes.companyInfoList}>
            <li className={classes.companyInfoListTitle}>Legal</li>
            <li className={classes.companyInfoListItem}>About Us</li>
            <li className={classes.companyInfoListItem}>Carrier</li>
            <li className={classes.companyInfoListItem}>We Are Hiring</li>
            <li className={classes.companyInfoListItem}>Blog</li>
        </ul>
    );
};

export default LegalList;