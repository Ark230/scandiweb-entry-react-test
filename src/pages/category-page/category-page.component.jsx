import React, { Component } from 'react';
import ProductImage from '../../assets/img/product-plp.jpg';
import CartIcon from '../../assets/img/cart-plp.svg';
import './category-page.styles.scss';

class CategoryPage extends Component {
    render() {

        return (
            <section className='category'>
                <h2 className='category__header'>Category Name</h2>
                <div className='category__products'>
                    <div className='category__product-container'>
                        <img src={ProductImage} className='category__product-image' />
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                        <img src={CartIcon} className='category__cart-icon' />
                    </div>
                    <div className='category__product-container'>
                        <figure className='category__out-of-stock'>
                            <img src={ProductImage} className='category__product-image--out-of-stock' />
                        </figure>
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                    </div>
                    <div className='category__product-container'>
                        <img src={ProductImage} className='category__product-image' />
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                        <img src={CartIcon} className='category__cart-icon' />
                    </div>
                    <div className='category__product-container'>
                        <img src={ProductImage} className='category__product-image' />
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                    </div>
                    <div className='category__product-container'>
                        <img src={ProductImage} className='category__product-image' />
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                    </div>
                    <div className='category__product-container'>
                        <img src={ProductImage} className='category__product-image' />
                        <p className='category__product-name'>Apollo Running Short</p>
                        <p className='category__product-cost'>$50.00</p>
                    </div>



                </div>
            </section>
        );
    }
}

export default CategoryPage;