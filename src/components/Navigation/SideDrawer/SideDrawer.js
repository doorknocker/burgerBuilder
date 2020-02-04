import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import BackDrop from "../../UI/Backdrop/Backdrop" ;
import Aux from "../../../hoc/Auxillary" ;


const sideDrawer = (props) => {
  let attachedClasses=  [classes.SideDrawer, classes.Open] ; 
  if (!props.openSD) 
    attachedClasses = [classes.SideDrawer, classes.Close] ;
    
  return (
    <Aux>
      <BackDrop show= {props.openSD} clicked={props.closeSD}/>
      <div className={attachedClasses.join (' ')}>
       <Logo height= "11%"/>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
