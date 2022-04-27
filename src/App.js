import React, { Component, Fragment } from 'react';
import CartItems from './components/cart-items/cart.component';
import Navbar from './components/navbar/navbar.component';
import './index.scss';

class App extends Component {


  render() {
    return (<Fragment>
      <Navbar />
    </Fragment>)
  };
}

export default App;
