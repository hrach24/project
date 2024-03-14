import React from 'react';
import classes from "../legalList/LegalList.module.scss";

const ResourcesList = () => {
    return (
        <ul className={classes.companyInfoList}>
            <li className={classes.companyInfoListTitle}>Resources</li>
            <li className={classes.companyInfoListItem}>IOS & Android</li>
            <li className={classes.companyInfoListItem}>Watch a Demo</li>
            <li className={classes.companyInfoListItem}>Customers</li>
            <li className={classes.companyInfoListItem}>API</li>
        </ul>
    );
};

export default ResourcesList;