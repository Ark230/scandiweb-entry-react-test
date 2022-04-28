import React, { Component, Fragment } from 'react';
import { ReactComponent as CartIcon } from '../../assets/img/cart.svg';
import './cart.styles.scss';
import productImg from '../../assets/img/product-image.png';

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCartOverlayOpen: false
        }
    }

    handleCartOverlay = () => {
        this.setState({
            isCartOverlayOpen: !this.state.isCartOverlayOpen
        })
    }

    render() {
        return (
            <Fragment>
                <li className="cart-icon" onClick={this.handleCartOverlay}>
                    <CartIcon />
                    <span className='cart-icon__product-quantity'>3</span>
                </li>

                {this.state.isCartOverlayOpen ? (
                    <div id="cart-modal" className='modal-background-overlay'>
                        <div className='cart'>
                            <p className='cart__header'>
                                <span className='cart__header__span'>My bag, </span>
                                3 items</p>

                            <div className='cart__items'>
                                <div className='cart__product-detail'>
                                    <div className='cart__product-specifications'>
                                        <p className='cart__product-name'>Apollo <br /> Running Short</p>
                                        <p className='cart__product-price'>$50.00</p>
                                        <div>
                                            <p className='cart__label'>Size:</p>
                                            <div className='cart__size'>
                                                <p className='cart__size-selector'>XS</p>
                                                <p className='cart__size-selector--active'>S</p>
                                                <p className='cart__size-selector'>L</p>
                                                <p className='cart__size-selector'>M</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='cart__label'>Color:</p>
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
                                <div className='cart__product-detail'>
                                    <div className='cart__product-specifications'>
                                        <p className='cart__product-name'>Apollo <br /> Running Short</p>
                                        <p className='cart__product-price'>$50.00</p>
                                        <div>
                                            <p className='cart__label'>Size:</p>
                                            <div className='cart__size'>
                                                <p className='cart__size-selector'>XS</p>
                                                <p className='cart__size-selector--active'>S</p>
                                                <p className='cart__size-selector'>L</p>
                                                <p className='cart__size-selector'>M</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='cart__label'>Color:</p>
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
                                <div className='cart__product-detail'>
                                    <div className='cart__product-specifications'>
                                        <p className='cart__product-name'>Apollo <br /> Running Short</p>
                                        <p className='cart__product-price'>$50.00</p>
                                        <div>
                                            <p className='cart__label'>Size:</p>
                                            <div className='cart__size'>
                                                <p className='cart__size-selector'>XS</p>
                                                <p className='cart__size-selector--active'>S</p>
                                                <p className='cart__size-selector'>L</p>
                                                <p className='cart__size-selector'>M</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className='cart__label'>Color:</p>
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

                    </div >) : null}

            </Fragment>
        );
    }
}

export default Cart;