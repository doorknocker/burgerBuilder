import React from 'react' ;
import Button from '../../components/UI/Button/Button' ;
import classes from './ContactData.css' ;
import axios from "../../axios_orders";

export default class ContactData extends React.Component {

      constructor (props) {
          super (props) ;
          this.state= {
              name: '',
              email: '',
              address: {
                  street: '',
                  postalCode: ''
              }
          } ;
      }

      order= (event) => {
          event.preventDefault () ;
          const order = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.price,
            customer: {
              name: "harshit",
              address: "lko"
            },
            total: 22
          };
          axios
            .post("/orders", order)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

      render () {
          return (
            <div className= {classes.ContactData}>
                 <h4>Enter your Contact Data:</h4>
                 <form>
                        <input type= "text" name= "name" placeholder= "Name"/>
                        <input type= "email" name= "email" placeholder= "Email"/>
                        <input type= "text" name= "street" placeholder= "Street"/>
                        <input type= "text" name= "postal" placeholder= "Postal Code"/>
                  </form>
                  <Button btnType= "Success"
                          clicked= {this.order}>
                          ORDER
                  </Button>
            </div>
          );
      }
}
