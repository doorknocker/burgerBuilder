import React, { Component } from "react";
import Auxillary from "../../hoc/Auxillary";
import Toolbar from "../Navigation/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {

  constructor (props) {
    super (props) ;
    this.state = {
      toggle : true
    } ;
  }

  clickedBD = () => {
    this.setState ({toggle: false}) ;
  }

  toggleSD = () => {
    this.setState ((previousState) => {
      return { toggle: !previousState.toggle } ;
    }) ;
  }

  render() {
    return (
      <Auxillary>
        <Toolbar toggleSD= {this.toggleSD} />
        <SideDrawer  closeSD= {this.clickedBD} openSD= {this.state.toggle} />
        <main>{this.props.children}</main>
      </Auxillary>
     );
  }
}

export default Layout;
