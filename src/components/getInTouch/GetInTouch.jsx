import React from 'react';
import classes from './GetInTouch.module.scss'
import classNames from "classnames";
import phoneImg from '../../assets/img/getintouch-01.svg';
import locationImg from '../../assets/img/getintouch-02.svg';
import messageImg from '../../assets/img/getintouch-03.svg';
import Button from "../ui/button/Button";
const GetInTouch = () => {
    return (
        <div className={classes.getInTouch}>
            <div className={classNames(classes.getInTouch__container, 'container')}>
                <div className={classes.getInTouch__containerText}><h2>Get In Touch</h2></div>
                <div className={classes.getInTouch__containerSubTitle}>Problems trying to resolve the conflict between <br/>
                    the two major realms of Classical physics: Newtonian mechanics </div>
                    <div className={classes.getInTouch__containerCards}>
                        <div className={classes.getInTouch__containerCard}>
                            <div className={classes.imgContainer}>
                                <img src={phoneImg} alt=""/>
                            </div>
                            <div className={classes.getInTouch__containerMails}>
                                <p className={classes.firstMail}>georgia.young@example.com</p>
                                <p className={classes.secondMail}>georgia.young@ple.com</p>
                            </div>
                            <div className={classes.getSupport}>
                                Get Support
                            </div>
                            <Button transParentOrange={true} text={'Submit Request'}/>
                        </div>
                            <div className={classNames(classes.getInTouch__containerCard, classes.second__card)}>
                            <div className={classes.imgContainer}>
                                <img src={locationImg} alt=""/>
                            </div>
                            <div className={classes.getInTouch__containerMails}>
                                <p className={classes.firstMail}>georgia.young@example.com</p>
                                <p className={classes.secondMail}>georgia.young@ple.com</p>
                            </div>

                            <div className={classes.getSupport}>
                                Get Support
                            </div>
                                <Button transParentOrange={true} text={'Submit Request'}/>
                        </div>
                        <div className={classes.getInTouch__containerCard}>
                            <div className={classes.imgContainer}>
                                <img src={messageImg} alt=""/>
                            </div>
                            <div className={classes.getInTouch__containerMails}>
                                <p className={classes.firstMail}>georgia.young@example.com</p>
                                <p className={classes.secondMail}>georgia.young@ple.com</p>
                            </div>

                            <div className={classes.getSupport}>
                                Get Support
                            </div>
                            <Button transParentOrange={true} text={'Submit Request'}/>
                        </div>
                </div>

            </div>
        </div>
    );
};

export default GetInTouch;