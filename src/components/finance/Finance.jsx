import classes from './Finance.module.scss'
import imgCover from '../../../src/assets/img/cover.jpg'

export default function Finance() {
    return(
        <>
            <div className={`${classes.finance__block} ${classes.container}`}>
                <div className={classes.finance__container}>
                    <div className={classes.finance__title}>
                        Finance and Consultancy Solution
                    </div>
                    <div className={classes.finance__subtitle}>
                        We know how large objects will act,
                        but things on a small scale.
                    </div>
                    <div className={classes.finance__buttons}>
                        <div className={classes.finance__buttons}>
                            <button className={`${classes.finance__buttonsGetQuote} ${classes.btnStyle}`}>Get Quote Now</button>
                            <button className={`${classes.btnStyle} ${classes.finance__buttonsLearnMore}`}>Learn More</button>
                        </div>
                    </div>
                </div>
                <div className={classes.header_img}>
                    <img src={imgCover} alt="" />
                </div>
            </div>
        </>
    )
}