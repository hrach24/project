import React from 'react';
import classes from "./GetInTouch.module.scss";
import phoneImg from '../../../../../assets/img/links-01.svg';
import locationImg from '../../../../../assets/img/links-02.svg';
import messageImg from '../../../../../assets/img/links-03.svg';
const GetInTouch = () => {
    return (
        <ul className={classes.companyInfoList}>
            <li className={classes.companyInfoListTitle}>Get In Touch</li>
            <li className={classes.companyInfoListItem}>
                <img src={phoneImg} alt="" className={classes.itemImg}/>
                (480) 555-0103
            </li>
            <li className={classes.companyInfoListItem}>
                <img src={locationImg} alt="" className={classes.itemImg}/>
                4517 Washington Ave.
            </li>
            <li className={classes.companyInfoListItem}>
                <img src={messageImg} alt="" className={classes.itemImg}/>
                debra.holt@example.com
            </li>
        </ul>
    );
};

export default GetInTouch;