import React, { Component, Fragment } from 'react';
import { ReactComponent as DownArrowIcon } from '../../assets/img/down-arrow.svg';
import './currency-selector.styles.scss';

class CurrencySelector extends Component {

    state = {
        isPopUpOpen: false
    }

    handleCurrencyPopUp = () => {
        this.setState({
            isPopUpOpen: !this.state.isPopUpOpen
        })
    }

    render() {
        return (
            <Fragment>
                <li className="currency-selector__icon" onClick={this.handleCurrencyPopUp}>$ <DownArrowIcon /></li>
                {this.state.isPopUpOpen ? (<div className='currency-selector'>
                    <p className='currency-selector__option'>$ USD</p>
                    <p className='currency-selector__option' >&euro; EUR</p>
                    <p className='currency-selector__option' >&#165; JPY</p>
                </div>) : null}
            </Fragment>

        )
    }
}

export default CurrencySelector;