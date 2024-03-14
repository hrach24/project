import React from 'react';
import classes from './Practice.module.scss'
import classNames from "classnames";
import practiceImg from '../../assets/img/practice-1.jpg';
import scPracticeImg from '../../assets/img/practice-2.jpg';
import thPracticeImg from '../../assets/img/practice-3.jpg';
import FoPracticeImg from '../../assets/img/practice-4.jpg';

const Practice = () => {
    return (
        <div className={classes.practice}>
            <div className={classNames(classes.practice__container, 'container')}>
                <div className={classes.practice__containerTitle}>Practice Advice</div>
                <div className={classes.practice__containerSubTitle}>Problems trying to resolve the conflict between <br/> the two
                    major realms of Classical physics: Newtonian mechanics
                </div>
                <div className={classes.practice__cards}>
                    <div className={classes.practice__card}>
                        <div className={classes.card__content}>
                            <div className={classes.practice__cardTitle}>A single source of truth</div>
                            <div className={classes.practice__cardSubtitle}>Newton thought that light was made up of particles,
                                but then it was discovered
                            </div>
                        </div>
                        <div className={classes.img__container}>
                            <img src={practiceImg} alt="" />
                        </div>
                    </div>
                    <div className={classes.practice__card}>
                        <div className={classes.card__content}>
                            <div className={classes.practice__cardTitle}>Fastest way to organize</div>
                            <div className={classes.practice__cardSubtitle}>“Quantum mechanics” is the description of the
                                behaviour of matter
                            </div>
                        </div>
                        <div className={classes.img__container}>
                            <img src={scPracticeImg} alt="" />
                        </div>
                    </div>
                    <div className={classes.practice__card}>
                        <div className={classes.card__content}>
                            <div className={classes.practice__cardTitle}>Fastest way to take action</div>
                            <div className={classes.practice__cardSubtitle}>They describe a universe consisting of bodies moving
                            </div>
                        </div>
                        <div className={classes.img__container}>
                            <img src={thPracticeImg} alt="" />
                        </div>
                    </div>
                    <div className={classes.practice__card}>
                        <div className={classes.card__content}>
                            <div className={classes.practice__cardTitle}>Work better together</div>
                            <div className={classes.practice__cardSubtitle}>They finally obtained a consistent description of the
                                behaviour
                            </div>
                        </div>
                        <div className={classes.img__container}>
                            <img src={FoPracticeImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Practice;