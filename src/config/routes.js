import React, { Component } from "react";
import App from "./../App";
import Header from "./../components/header";


import MovieDetail from "./../components/Details/movieDetail";
import TvDetail from "./../components/Details/tvDetail";

import {BrowserRouter as Router, Route} from "react-router-dom";

class Routes extends Component {
   render() {
      return (
         <Router>
            <div>
               <Route component={Header} />
               <Route exact path="/" component={App} />
               <Route exact path="/movie-detail" component={MovieDetail} />
               <Route exact path="/tv-detail" component={TvDetail} />
            </div>
         </Router>
      );
   }
}

export default Routes;