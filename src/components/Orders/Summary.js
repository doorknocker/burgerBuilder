import React from 'react' ;
import Burger from '../Burger/Burger' ;
import Button from '../UI/Button/Button' ;
import classes from './Summary.css' ;

export default function summary (props) {
    return (
      <div className= {classes.summary}>
        <h1>We hope you have a delicious time!</h1>
        <div style= {{height: "300px", width: "300px", margin: "auto"}}>
          <Burger ingredients= {props.ingredients} />
        </div>
        <Button btnType= "Danger"
                clicked= {props.cancel} >CANCEL</Button>
        <Button btnType= "Success"
                clicked= {props.continue} >CONTINUE</Button>
      </div>
    ) ;
}
