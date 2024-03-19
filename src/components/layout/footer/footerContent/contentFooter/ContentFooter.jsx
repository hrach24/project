import React, {useState} from 'react';
import classes from "./ContentFooter.module.scss";
import { FOOTER__DATA } from "../footerContentLinks/footerData/footerData";
import imgArrowDown from '../../../../../assets/img/arrow-down.png';
import imgArrowUp from '../../../../../assets/img/arrow-up.png'
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
const footerLinks = FOOTER__DATA
const ContentFooter = () => {
    const arrowDownMediaRequest = useMediaQuery({query: '(max-width: 663px)'});
    const [currentObj, updateObj] = useState();
    const [listItemId, updateListItemId] = useState();

    function changeTheFunc(clickedObj, clickedItemId) {
        updateListItemId(clickedItemId);
        if (clickedItemId !== listItemId) {
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
                            <div className={classNames(classes.title, item.hide ? classes.clickedTitle : null)} onClick={() => changeTheFunc(FOOTER__DATA[index], item.id)}>
                                { item.title }
                                { arrowDownMediaRequest ? <img src={ item.hide ? imgArrowDown : imgArrowUp } alt=""/> : null }

                            </div>
                            {
                                item.hide ? <ul className={classNames(classes.containerList, index + 1 === footerLinks.length ? classes.lastList : null)}>
                                    {
                                        item.children.map((paths) => {
                                            return (
                                                <li className={classes.listItem}>
                                                    {paths.path}
                                                </li>
                                            )
                                        })
                                    }
                                </ul> : null
                            }

                        </div>
                    )
                })
            }
        </>
    );
};

export default ContentFooter;