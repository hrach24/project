import React from 'react';
import clientImg01 from '../../assets/img/clients-01.png'
import clientImg02 from '../../assets/img/clients-02.png'
import clientImg03 from '../../assets/img/clients-03.png'
import clientImg04 from '../../assets/img/clients-04.png'
import clientImg05 from '../../assets/img/clients-05.png'
import clientImg06 from '../../assets/img/clients-06.png'
import classes from './NewsLetter.module.scss'
import classNames from "classnames";


const NewsLetter = () => {
    return (
        <div className="newsletter">
            <div className={classNames(classes.newsletter__container, 'container')}>
                <div className={classes.newsletter__partners}>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg06} alt="" />
                    </div>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg01} alt="" />
                    </div>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg02} alt="" />
                    </div>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg03} alt="" />
                    </div>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg04} alt="" />
                    </div>
                    <div className={classes.newsletter__partner}>
                        <img src={clientImg05} alt="" />
                    </div>
                </div>
                <div className={classes.newsletter__search}>
                    <div className={classes.search__title}><h3>Subscribe For Latest Newsletter</h3></div>
                    <div className={classes.search__bar}>
                        <input type="text" className={classes.newsletter__searchInput} placeholder={"Your Email"}/>
                            <button className={classes.subscribeBtn}>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className={classes.newsLetter__footer}></div>
        </div>
    );
};

export default NewsLetter;