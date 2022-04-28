import React, { Component } from 'react';
import { ReactComponent as PurchaseBagIcon } from '../../assets/img/purchase-bag.svg';
import './navbar.styles.scss';
import CurrencySelector from '../currency-selector/currency-selector.component';
import Cart from '../cart/cart.component';

class Navbar extends Component {
    render() {
        return (
            <nav className="header">
                <ul className="header-list header-list--product-type">
                    <li className="header__item active">WOMEN</li>
                    <li className="header__item">MEN</li>
                    <li className="header__item">KIDS</li>
                </ul>
                <PurchaseBagIcon />
                <ul className="header-list header-list--cart">
                    <CurrencySelector />
                    <Cart />
                </ul>
            </nav>
        );
    }
}

export default Navbar;