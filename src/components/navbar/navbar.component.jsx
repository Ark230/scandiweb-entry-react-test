import React, { Component } from 'react';
import { ReactComponent as PurchaseBag } from '../../assets/img/purchase-bag.svg';
import { ReactComponent as DownArrow } from '../../assets/img/down-arrow.svg';
import { ReactComponent as Cart } from '../../assets/img/cart.svg';
import './navbar.styles.scss';
import CartItems from '../cart-items/cart.component';

class Navbar extends Component {
    render() {
        return (
            <nav className="header">

                <ul className="header-list header-list--product-type">
                    <li className="header__item active">WOMEN</li>
                    <li className="header__item">MEN</li>
                    <li className="header__item">KIDS</li>
                </ul>
                <PurchaseBag />
                <ul className="header-list header-list--cart">
                    <li className="header__item">$ <DownArrow /></li>
                    <li className="header__item">
                        <Cart />
                    </li>
                </ul>

                <CartItems />

            </nav>
        );
    }
}

export default Navbar;