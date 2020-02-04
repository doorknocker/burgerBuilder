import React from 'react' ;
import Summary from '../components/Orders/Summary' ;
import ContactData from './ContactData/ContactData' ;
import {Route} from 'react-router-dom' ;

export default class Checkout extends React.Component {

    constructor (props) {
        super (props) ;
        this.state= {
          ingredients: null,
          price: 0
        } ;
    }

    componentWillMount () {
        let query= new URLSearchParams (this.props.location.search) ;
        let ingredients= {} ;
        let price ;

        for (let q of query.entries ()){

            if (q[0]=== 'price' )
              price= q[1] ;
            else
              ingredients[q[0]]= +q[1] ;

        }
        this.setState (prev => ({ingredients: ingredients, price: price})) ;
    }

    placeOrder = () => {
      this.props.history.push ("/checkout/contact-data") ;
    }

    cancelOrder = () => {
      this.props.history.goBack () ;
    }

    render () {
        return(
              <React.Fragment>
                              <Summary ingredients= {this.state.ingredients}
                                       continue= {this.placeOrder}
                                       cancel= {this.cancelOrder}/>
                              <Route path= {this.props.match.path + "/contact-data"}
                                     render= {() => (<ContactData ingredients= {this.state.ingredients} price={this.state.price}  />)  } />
              </React.Fragment>
              ) ;
    }
}
