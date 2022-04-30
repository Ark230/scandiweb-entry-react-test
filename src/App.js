import React, { Component, Fragment } from 'react';
import Navbar from './components/navbar/navbar.component';
import './index.scss';
import CategoryPage from './pages/category-page/category-page.component';


class App extends Component {


  render() {
    return (<Fragment>
      <Navbar />
      <CategoryPage />
    </Fragment>)
  };
}

export default App;
