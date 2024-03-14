import React from 'react';
import classes from "../legalList/LegalList.module.scss";

const FeaturesList = () => {
    return (
        <ul className={classes.companyInfoList}>
            <li className={classes.companyInfoListTitle}>Features</li>
            <li className={classes.companyInfoListItem}>Business Marketing</li>
            <li className={classes.companyInfoListItem}>User Analytic</li>
            <li className={classes.companyInfoListItem}>Live Chat</li>
            <li className={classes.companyInfoListItem}>Unlimited Support</li>
        </ul>
    );
};

export default FeaturesList;