import React from 'react';
import classes from './LinksFooter.module.scss'
import facebook from '../../../../assets/img/social-01.svg';
import insta from '../../../../assets/img/social-02.svg';
import twitter from '../../../../assets/img/social-03.svg';
import youtube from '../../../../assets/img/social-04.svg';
import classNames from "classnames";


const LinksFooter = () => {
    return (
        <div className={classes.links}>
            <div className={classNames(classes.link__footer, 'container')}>
                <div className={classes.text}>Made With Love By Figmaland All Right Reserved</div>
                    <ul className={classes.linksList}>
                        <li className={classes.linkListItem}><a href="" className={classes.itemLink}><img src={facebook} className={classes.itemImg} alt=""/></a></li>
                        <li className={classes.linkListItem}><a href="" className={classes.itemLink}><img src={insta} className={classes.itemImg} alt=""/></a></li>
                        <li className={classes.linkListItem}><a href="" className={classes.itemLink}><img src={twitter} className={classes.itemImg} alt=""/></a></li>
                        <li className={classes.linkListItem}><a href="" className={classes.itemLink}><img src={youtube} className={classes.itemImg} alt=""/></a></li>
                    </ul>
            </div>
        </div>
    );
};

export default LinksFooter;