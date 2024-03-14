import React from 'react';
import classes from './FooterContent.module.scss'
import CompanyInfo from "./companyInfoList/CompanyInfoList";
import LegalList from "./legalList/LegalList";
import FeaturesList from "./featuresList/FeaturesList";
import ResourcesList from "./resourcesList/ResourcesList";
import GetInTouch from "./getInTouch/GetInTouch";
import classNames from "classnames";


const FooterContent = () => {
    return (
        <div className={classes.links}>
            <div className={classNames(classes.links_container, 'container')}>
                <div className={classes.listHolder}>
                    <CompanyInfo />
                    <LegalList />
                    <FeaturesList />
                    <ResourcesList />
                    <GetInTouch />
                </div>
            </div>
        </div>
    );
};

export default FooterContent;