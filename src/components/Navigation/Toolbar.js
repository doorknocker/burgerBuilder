import React from "react";
import classes from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import Menu from "./Menu/Menu"

const toolbar = props => (
  <header className={classes.Toolbar}>
    <Menu clicked= {props.toggleSD} />
    <Logo height= "11%"/>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
