import React from 'react';
import classes from './Product.module.scss';
import cartierImg from '../../assets/img/cartierr.jpg';

const Product = () => {
    return (
        <div className='wrapper'>
                <div className={classes.products}>
                    <div className="container">
                        <div className={classes.product}>
                            <img src={cartierImg} alt="sunglass" className={classes.productImg}/>
                            <div className={classes.productDescription}>
                                <p>hekeh</p>
                                <p>hekeh</p>
                                <p>hekeh</p>
                                <p>hekeh</p>
                                <p>hekeh</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;