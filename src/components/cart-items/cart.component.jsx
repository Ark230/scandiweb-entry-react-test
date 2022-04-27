import React, { Component } from 'react';
import './cart.styles.scss';
import productImg from '../../assets/img/product-image.png';


class CartItems extends Component {
    render() {
        return (

            <div id="myModal" className='modal'>

                <div className='cart'>
                    <p className='cart__header'>
                        <span className='cart__header__span'>My bag, </span>
                        3 items</p>

                    <div className='cart__product-details'>
                        <div className='cart__product-specifications'>
                            <p className='cart__product-name'>Apollo Running Short</p>
                            <p className='cart__product-price'>$50.00</p>
                            <div>
                                <p style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Size:</p>
                                <div className='cart__size'>
                                    <p className='cart__size-selector'>XS</p>
                                    <p className='cart__size-selector--active'>S</p>
                                    <p className='cart__size-selector'>L</p>
                                    <p className='cart__size-selector'>M</p>
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Color:</p>
                                <div className='cart__color-swatch'>
                                    <p className='cart__color-swatch__color'></p>
                                    <p className='cart__color-swatch__color'></p>
                                    <p className='cart__color-swatch__color'></p>
                                </div>
                            </div>
                        </div>

                        <div className='cart__product-quantity-input'>
                            <p className='cart__product-selector'>+</p>
                            <p className='cart__product-quantity'>1</p>
                            <p className='cart__product-selector'>-</p>
                        </div>


                        <img src={productImg} className='cart__product-image' />

                    </div>
                    <div className='cart__product-details'>
                        <div className='cart__product-specifications'>
                            <p className='cart__product-name'>Apollo Running Short</p>
                            <p className='cart__product-price'>$50.00</p>
                            <div>
                                <p style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Size:</p>
                                <div className='cart__size'>
                                    <p className='cart__size-selector'>XS</p>
                                    <p className='cart__size-selector--active'>S</p>
                                    <p className='cart__size-selector'>L</p>
                                    <p className='cart__size-selector'>M</p>
                                    {/*Iterate over amount of sizes that the product has */}
                                </div>
                            </div>
                            <div>
                                <p style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Color:</p>
                                <div className='cart__color-swatch'>
                                    <p className='cart__color-swatch__color'></p>
                                    <p className='cart__color-swatch__color'></p>
                                    <p className='cart__color-swatch__color'></p>
                                    {/*Iterate over each color that the product has */}
                                </div>
                            </div>
                        </div>

                        <div className='cart__product-quantity-input'>
                            <p className='cart__product-selector'>+</p>
                            <p className='cart__product-quantity'>1</p>
                            <p className='cart__product-selector'>-</p>
                        </div>


                        <img src={productImg} className='cart__product-image' />

                    </div>

                    <div className='cart__footer'>
                        <div className='cart__total'>
                            <p className='cart__total__price-label'>Total</p>
                            <p className='cart__total__price-num'>$200.00</p>
                        </div>
                        <div className='cart__button-position'>
                            <button className='cart__view-bag'>VIEW BAG</button>
                            <button className='cart__checkout'>CHECK OUT</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default CartItems;