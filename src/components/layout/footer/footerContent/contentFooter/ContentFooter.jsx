import React, {useState} from 'react';
import classes from "./ContentFooter.module.scss";
import { FOOTER__DATA } from "../footerContentLinks/footerData/footerData";
import imgArrowDown from '../../../../../assets/img/arrow-down.png';
import imgArrowUp from '../../../../../assets/img/arrow-up.png'
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import {Link} from "react-router-dom";
const footerLinks = FOOTER__DATA
const ContentFooter = () => {
    const arrowDownMediaRequest = useMediaQuery({query: '(max-width: 680px)'});
    const [currentObj, updateObj] = useState();
    const [listItemId, updateListItemId] = useState();


    function showListItem(clickedObj, clickedItemIndex) {
        updateListItemId(clickedItemIndex);
        if (clickedItemIndex !== listItemId) {
            footerLinks.map((item) => updateObj(item.hide = false));

        }
        updateObj({...clickedObj, ...clickedObj.hide = !clickedObj.hide});
    }

    return (
        <>
            {
                footerLinks.map((item, index) => {
                    return (
                        <div className={classNames(classes.footerMenuListContainer, index + 1 === footerLinks.length ? classes.lastContent : null)} key={item.id}>
                            <div className={classNames(classes.MobileTitle, item.hide ? classes.clickedTitle : null)} onClick={() => showListItem(item, index)}>
                                { item.title }
                                {arrowDownMediaRequest ? <img src={item.hide ? imgArrowUp : imgArrowDown} alt=""/> : null }
                            </div>
                            {arrowDownMediaRequest ? <ul>
                                    { item.hide ?
                                        item.children.map((paths) => {
                                            return (
                                                <li className={classes.listItem}>
                                                    <Link href="#" className={classes.listItem} to={'#'}>{paths.path}</Link>
                                                </li>
                                            )
                                        })
                                   : null }
                                </ul> :
                                <ul className={classNames(classes.containerList, index + 1 === footerLinks.length ? classes.lastList : null)}>
                                    {
                                        item.children.map((paths) => {
                                            return (
                                                <li className={classes.listItem}>
                                                    <Link href="#" className={classes.listItem} to={'#'}>{paths.path}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            }

                        </div>
                    )
                })
            }
        </>
    );
};

export default ContentFooter;