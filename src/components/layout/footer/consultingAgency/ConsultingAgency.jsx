import React from 'react';
import classes from './ConsultingAgency.module.scss'
import classNames from "classnames";
import Button from "../../../ui/button/Button";


const ConsultingAgency = () => {
    return (
        <div className={classNames(classes.agency, 'container')}>
            <div className={classes.containerHolder}>
                <div className={classes.titleAndSubtitle}>
                    <div className={classes.title}>Consulting Agency For Your Business</div>
                    <div className={classes.subTitle}>the quick fox jumps over the lazy dog</div>
                </div>
                <div className={classes.forBtnPadding}>
                    <Button orange={true} text={'Contact Us'}/>
                </div>
            </div>

        </div>
    );
};

export default ConsultingAgency;