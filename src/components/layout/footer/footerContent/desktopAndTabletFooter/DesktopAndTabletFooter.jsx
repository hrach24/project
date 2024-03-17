import React from 'react';
import classes from "./DesktopAndTabletFooter.module.scss";
import {FOOTER__DATA} from "../footerContentLinks/footerData/footerData";
const DesktopAndTabletFooter = () => {
    function create(number, item) {
        const items = [];
        for (let i = 0; i < number; i++) {
            const propName = `path${i + 1}`;
            const propValue = item[propName]
            items.push(<li key={i} className={classes.listItem}>{propValue}</li>)
        }
        return(<li>{items}</li>)
    }
    return (
        <>
            {
                FOOTER__DATA.map((item) => {
                    console.log(Object.keys(item).length - 2)
                    return(
                        <div className={classes.container} key={item.id}>
                            <span className={classes.listTitle}>{item.title}</span>
                            <ul className={classes.containerList}>
                                {/*<li className={classes.listItem}>{item.path1}</li>*/}
                                {/*<li className={classes.listItem}>{item.path2}</li>*/}
                                {/*<li className={classes.listItem}>{item.path3}</li>*/}
                                {/*<li className={classes.listItem}>{item.path4}</li>*/}
                                {
                                    create(Object.keys(item).length - 3, item)
                                }
                            </ul>
                        </div>
                    )
                })
            }

        </>
    );
};

export default DesktopAndTabletFooter;