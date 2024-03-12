import classes from './Design.module.scss'
import peopleImg from '../../assets/img/01-1.svg';
import atomsImg from '../../assets/img/02-2.svg';
import rewardImg from '../../assets/img/03-3.svg';
import caseImg from '../../assets/img/04-4.svg'

import React from 'react';

const Design = () => {
    return (
            <div className={classes.design}>
                <div className={`${classes.design__container} ${classes.container}`}>
                    <div className={classes.design__containerTitle}>Designing Better Experience</div>
                    <div className={classes.design__containerSubTitle}>Problems trying to resolve the conflict between
                        the two major
                        realms of Classical physics: Newtonian mechanics
                    </div>

                    <div className={classes.design__cards}>
                        <div className={`${classes.design__card} ${classes._consumer}`}>
                            <img src={peopleImg} alt=""/>
                            <div className={classes.design__cardNumber}>972 +</div>
                            <div className={classes.design__cardTitle}>Consumer Products</div>
                        </div>
                        <div className={`${classes.design__card} ${classes._service}`}>
                            <img src={atomsImg} alt=""/>
                            <div className={classes.design__cardNumber}>181+</div>
                            <div className={classes.design__cardTitle}>Financial Services</div>
                        </div>
                        <div className={`${classes.design__card} ${classes._environmental}`}>
                            <img src={rewardImg} alt=""/>
                            <div className={classes.design__cardNumber}>98%</div>
                            <div className={classes.design__cardTitle}>Environmental</div>
                        </div>
                        <div className={`${classes.design__card} ${classes._business}`}>
                            <img src={caseImg} alt=""/>
                            <div className={classes.design__cardNumber}>746+</div>
                            <div className={classes.design__cardTitle}>Business & Finance</div>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Design;