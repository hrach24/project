import React from 'react';
import classes from './Product.module.scss';
import cartierImg from '../../assets/img/cartierr.jpg';
import classNames from "classnames";
import Button from "../../components/ui/button/Button";

const Product = () => {
    return (
        <div className='wrapper'>
                <div className={classes.products}>
                    <div className={classNames(classes.productContainer, "container")}>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <Button text={'Buy'}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <div className={classes.content}>
                                    <p className={classes.title}>Title: Sunglasses</p>
                                    <p className={classes.title}>Model: S</p>
                                    <p className={classes.title}>Price: 20$</p>
                                    <div className={classes.wrapper}>
                                        <button className={classes.buy}>Buy</button>
                                    </div>
                                </div>

                            </div>
                        </div>                        <div className={classes.product}>
                        <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                        <div className={classes.productDescription}>
                            <div className={classes.content}>
                                <p className={classes.title}>Title: Sunglasses</p>
                                <p className={classes.title}>Model: S</p>
                                <p className={classes.title}>Price: 20$</p>
                                <div className={classes.wrapper}>
                                    <button className={classes.buy}>Buy</button>
                                </div>
                            </div>
                            </div>
                         </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;