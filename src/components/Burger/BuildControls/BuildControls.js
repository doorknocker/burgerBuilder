import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Price: <em>{props.price.toFixed(2)}</em>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.addedingredient(ctrl.type)}
            removed={() => props.removedIngredient(ctrl.type)}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.summary}
      >
        Order Now{" "}
      </button>
    </div>
  );
};

export default buildControls;
