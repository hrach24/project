import React, {useState} from 'react';
import classes from "./MobileFooter.module.scss";
import arrowUpImg from "../../../../../assets/img/arrow-up.png";
import arrowDownImg from "../../../../../assets/img/arrow-down.png";
import {FOOTER__DATA} from "../footerContentLinks/footerData/footerData";

const MobileFooter = () => {
    const [currentObj, updateObj] = useState();
    const [listItemId, updateListItemId] = useState();
    const objNew = FOOTER__DATA;

    function changeTheFunc(clickedObj, clickedItemId) {
        updateListItemId(clickedItemId);
        if (clickedItemId !== listItemId) {
            objNew.map((item) => updateObj(item.hide = false));

        }
        updateObj({...clickedObj, ...clickedObj.hide = !clickedObj.hide});
    }

    return (
        <>
            {
                FOOTER__DATA.map((item, index)=> {
                    return (
                        <div className={classes.container} key={item.id}>
                            <div className={classes.titleImgContainer}>
                                <span className={item.hide ? classes.mobileResourcesTitle : classes.title}>{item.title}</span>
                                <img src={item.hide ? arrowDownImg : arrowUpImg} className={classes.arrowImg} onClick={() => changeTheFunc(FOOTER__DATA[index], item.id)}/>
                            </div>

                            {item.hide ? <ul className={classes.list}>
                                <li className={classes.item}>{item.path1}</li>
                                <li className={classes.item}>{item.path2}</li>
                                <li className={classes.item}>{item.path3}</li>
                                <li className={classes.item}>{item.path4}</li>
                            </ul> : null

                            }
                        </div>

                    )
                })
            }

        </>
    );
};

export default MobileFooter;