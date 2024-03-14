import React from 'react';
import classes from './CompanyInfoList.module.scss'


const CompanyInfo = () => {
    return (
        <ul className={classes.companyInfoList}>
            <li className={classes.companyInfoListTitle}>Company Info</li>
            <li className={classes.companyInfoListItem}>About Us</li>
            <li className={classes.companyInfoListItem}>Carrier</li>
            <li className={classes.companyInfoListItem}>We Are Hiring</li>
            <li className={classes.companyInfoListItem}>Blog</li>
        </ul>
    );
};

export default CompanyInfo;