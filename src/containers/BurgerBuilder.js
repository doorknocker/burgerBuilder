import React, { Component } from "react";
import Burger from "../components/Burger/Burger";
import BuildControls from "../components/Burger/BuildControls/BuildControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/Burger/OrderSummary/OrderSummary";
import ErrorHandler from '../hoc/ErrorHandler' ;
import Aux from '../hoc/Auxillary' ;
import axios from "../axios_orders";

const PRICES = {
  salad: 0.3,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7
};



class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: null,
      // ingredients: {
      //   salad: 0,
      //   cheese: 0,
      //   meat: 0,
      //   bacon: 0
      // },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
    };
  }

  componentDidMount () {
      axios.get ('https://burger-builder-78c9c.firebaseio.com/ingredients.json')
           .then (res => {
             this.setState ({ingredients: res.data}) ;
           }) ;
  }

  addIngredient = type => {
    let updatedValue = this.state.ingredients[type];
    let updatedPrice = this.state.totalPrice + PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedValue++;
    updatedIngredients[type] = updatedValue;
    this.setState({
      totalPrice: updatedPrice,
      ingredients: updatedIngredients
    });
    this.checkPrice(updatedIngredients);
  };

  removeIngredient = type => {
    if (this.state.ingredients[type] !== 0) {
      let value = this.state.ingredients[type];
      let updatedPrice = this.state.totalPrice;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = --value;
      updatedPrice -= PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedPrice
      });
      this.checkPrice(updatedIngredients);
    }
  };

  checkPrice = ing => {
    const current_ingredients = ing;
    const sum = Object.keys(current_ingredients)
      .map(ing => current_ingredients[ing])
      .reduce((summation, element) => {
        return summation + element;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  showSummary = () => {
    this.setState({ purchasing: true });
  };

  clickBackdrop = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = () => {
    let queryParams= [] ;

    for (let i in this.state.ingredients)
        queryParams.push (encodeURIComponent (i) + "=" + encodeURIComponent (this.state.ingredients [i]))

    queryParams.push ("price=" + this.state.totalPrice) ;
    const queryString= queryParams.join ("&") ;
    this.props.history.push ({
        pathname: "/checkout",
        search: "?" + queryString
    }) ;
  }


  cancelPurchase = () => {
    this.setState({ purchasing: false });
  }


  render() {
    let burger = <p>Loading...</p> ;
    let orderSummary= null ;

    if (this.state.ingredients) {
      burger= (<Aux>
                <p>Burger Builder</p>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                  addedingredient={this.addIngredient}
                  removedIngredient={this.removeIngredient}
                  price={this.state.totalPrice}
                  purchasable={this.state.purchasable}
                  summary={this.showSummary}
                />
              </Aux>) ;

      orderSummary= <OrderSummary
                      ingredients={this.state.ingredients}
                      continuePurchase={this.continuePurchase}
                      cancelPurchase={this.cancelPurchase}
                      price={this.state.totalPrice}
                    /> ;
    }

    return (
      <div>
        {burger}
        <Modal show={this.state.purchasing} clickedBD={this.clickBackdrop}>
        {orderSummary}
        </Modal>
      </div>
    );
  }
}

export default ErrorHandler (BurgerBuilder, axios);
