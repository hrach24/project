import React from 'react';
import classes from "./Cards.module.scss";
import caseImg from "../../assets/img/01.svg";
import homeImg from "../../assets/img/02.svg";
import cardImg from "../../assets/img/03.svg";
import classNames from "classnames";

const Card = () => {
    return (
            <div className={classes.cards}>
                <div className={classNames(classes.cards__block, 'container')}>
                    <div className={`${classes.card} ${classes.cards__blockEnvironmental}`}>
                        <img src={caseImg} alt="" className={classes.card__img} />
                        <p className={classes.card__title}>Environmental Consulting</p>
                        <p className={classes.card__subtitle}>We focus on ergonomics and meeting you where you work. </p>
                    </div>
                    <div className={`${classes.card} ${classes.cards__blockFinance}`}>
                        <img src={homeImg} alt="" className={classes.card__img} />
                        <p className={classes.card__title}>Finance and consultancy</p>
                        <p className={classes.card__subtitle}>Just type what's on your mind and we'll get you there.</p>
                    </div>
                    <div className={`${classes.card} ${classes.cards__blockConsulting}`}>
                        <img src={cardImg} alt="" className={classes.card__img} />
                        <p className={classes.card__title}>Financial Services Consulting</p>
                        <p className={classes.card__subtitle}>the quick fox jumps over the lazy dog</p>
                    </div>
                </div>
            </div>
    );
};

export default Card;