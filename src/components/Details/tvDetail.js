import React, { Component } from "react";

export default class TvDetail extends Component {
   componentDidMount() {
      console.log("props in tv detail ", this.props)
   }

   render() {
      const { state } = this.props.location;
      console.log("detail is ", state)
      return(
         <div className="card">
            {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
            <div className="card-body">
               <h5 className="card-title">{state.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item"><strong>Popularity </strong> {state.popularity}</li>
               <li className="list-group-item"><strong>Vote Average </strong> {state.vote_average}</li>
               <li className="list-group-item"><strong>Popularity </strong> {state.vote_count}</li>
            </ul>
            <div className="card-body">
               <p>{state.overview}</p>
            </div>
         </div>
      );
   }
}