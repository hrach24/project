import React from 'react';
import classes from './About.module.scss'
import classNames from "classnames";
import practiceImg1 from "../../assets/img/practice-1.jpg";
import practiceImg2 from "../../assets/img/practice-2.jpg";
import practiceImg3 from "../../assets/img/practice-3.jpg";
import practiceImg4 from "../../assets/img/practice-4.jpg";
import icon01 from "../../assets/img/icon-01.svg";
import icon02 from "../../assets/img/icon-02.svg";
const About = () => {
    return (
        <div className={classes.whoWeAre__container}>
            <div className={classNames(classes.whoWeAre__container__content, classes.container)}>
                <div className={classes.whoWeAre__header}>Who We Are</div>
                <div className={classes.whoWeAre__subtitle}>Problems trying to resolve the conflict between the two major realms of
                    Classical physics: Newtonian mechanics
                </div>
                <div className={classes.whoWeAre__content}>
                    <div className={classes.whoWeAre__video}>
                        <img src={practiceImg3}alt="" />
                    </div>
                    <div className={classes.whoWeAre__description}>
                        <div className={classes.whoWeAre__title}>Most trusted in our field</div>
                        <div className={classes.whoWeAreSub}>Most calendars are designed for teams. Slate is designed for
                            freelancers who want a simple way to plan their schedule.
                        </div>

                        <div className={classes.whoWeAre__icon__description}>
                            <div className={classes.whoWeAre__icon}>
                                <img src={icon01} alt="" />
                            </div>
                            <div className={classes.whoWeAre__icon__description}>
                                <div className={classes.icon__descriptionTitle}>the quick fox jumps over the lazy dog</div>
                                <div className={classes.icon__DescriptionDescription}>Things on a very small scale ...</div>
                            </div>
                        </div>
                        <div className={classes.whoWeAre__icon__containerSecond}>
                            <div className={classes.whoWeAre__icon}>
                                <img src={icon02} alt="" />
                            </div>
                            <div className={classes.whoWeAre__icon__description}>
                                <div className={classes.icon__descriptionTitle}>the quick fox jumps over the lazy dog</div>
                                <div className={classes.icon__DescriptionDescription}>Things on a very small scale ...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default About;