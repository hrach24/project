import classes from './Finance.module.scss'
import imgCover from '../../../src/assets/img/cover.jpg'
import classNames from "classnames";
import Button from "../ui/button/Button";
import GreenButton from "../ui/button/GreenButton";

export default function Finance() {
    return(
        <>
            <div className={classNames(classes.finance__block, 'container')}>
                <div className={classes.finance__container}>
                    <div className={classes.finance__title}>
                        Finance and Consultancy Solution
                    </div>
                    <div className={classes.finance__subtitle}>
                        We know how large objects will act,
                        but things on a small scale.
                    </div>
                    <div className={classes.finance__buttons}>
                        <Button text={'Get Quote Now'}/>
                        <GreenButton />
                    </div>
                </div>
                <div className={classes.header_img}>
                    <img src={imgCover} alt="" />
                </div>
            </div>
        </>
    )
}