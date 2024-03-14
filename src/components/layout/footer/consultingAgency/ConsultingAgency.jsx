import React from 'react';
import classes from './ConsultingAgency.module.scss'
import classNames from "classnames";


const ConsultingAgency = () => {
    return (
        <div className={classNames(classes.agency, 'container')}>
            <div className={classes.titleAndSubtitle}>
                <div className={classes.title}>Consulting Agency For Your Business</div>
                <div className={classes.subTitle}>the quick fox jumps over the lazy dog</div>
            </div>

            <button className={classes.footerBtn}>Contact Us</button>
        </div>
    );
};

export default ConsultingAgency;