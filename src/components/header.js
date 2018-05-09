import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Header extends Component {
   homePage() {
      this.props.history.push("/");
   }

   render() {
      return (
         <nav className="navbar navbar-invers navbar-default">
            <div className="container-fluid">
               <div className="navbar-header">
                  <button className="navbar-brand" onClick={() => this.homePage()} >NUMU</button>
               </div>
            </div>
         </nav>
      );
   }
}

export default withRouter(Header);