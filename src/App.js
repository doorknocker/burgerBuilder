import React, { Component } from 'react';
import {Route} from 'react-router-dom' ;
import './App.css';
import Layout from './components/Layout/layout' ;
import BurgerBuilder from './containers/BurgerBuilder' ;
import Checkout from './containers/Checkout' ;

class App extends Component {

  render() {
    return (
      <Layout>
       <Route path= "/" exact component= {BurgerBuilder} />
       <Route path= "/checkout" component= {Checkout} />
      </Layout>
    );
  }
}

export default App;
