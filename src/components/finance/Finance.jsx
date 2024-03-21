import classes from './Finance.module.scss'
import imgCover from '../../../src/assets/img/cover.jpg'
import classNames from "classnames";
import Button from "../ui/button/Button";

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
                        <div className={classes.learnMoreBtn}>
                            {/*<Button text={'Get Quote Now'}*/}
                            {/*        backGroundColor={"#FF7B47"}*/}
                            {/*        padding={ [ {key:15}, {key: 40} ] }*/}
                            {/*        borderRadius={15}*/}
                            {/*        border={'none'}*/}
                            {/*        color={'white'}*/}
                            {/*        fontWeight={'bold'}*/}
                            {/*        borderTopRightRadius={15}*/}
                            {/*        borderBottomRightRadius={15}*/}
                            {/*/>*/}
                            <Button orange={true} text={'Get Quote Now'}/>
                        </div>

                        <div className={classes.learnMoreBtn}>
                            <Button transParentGreen={true} text={'Learn More'}/>
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