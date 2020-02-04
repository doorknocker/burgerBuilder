import React from "react";
import Auxillary from "../../../hoc/Auxillary";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingredient_list = Object.keys(props.ingredients).map(ing => {
    return (
      <li key={ing}>
        <span
          style={{
            textTransform: "capitalize"
          }}
        >
          {" "}
          {ing}{" "}
        </span>
        : {props.ingredients[ing]}
      </li>
    );
  });

  return (
    <Auxillary>
      <h3> Order Summary </h3> <p> Your delicious burger contains: </p>{" "}
      <ul> {ingredient_list} </ul> <p> Continue to checkout ? </p>
      <p><strong>Total Price= {props.price.toFixed (2)}</strong></p>
      <Button btnType="Danger" clicked= {props.cancelPurchase}>Cancel</Button>
      <Button btnType="Success" clicked= {props.continuePurchase}>Continue</Button>
    </Auxillary>
  );
};

export default orderSummary;
