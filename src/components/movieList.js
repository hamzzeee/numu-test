import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { fetchMovieList } from "./../actions/actions";

import MovieDetail from "./Details/movieDetail";

class MovieList extends Component {
   constructor(props) {
      super(props);
      this.state = {
         startIndex: 0,
         endIndex: 3
      }

      // this.calculateIndex = this.handleEvent.bind(this);
      // this.handleEvent = this.handleEvent.bind(this);
   }

   componentWillMount() {
      this.props.fetchMovieList();
   }

   calculateIndex = () => {
      let movies = this.props.movies;
      if (this.state.endIndex + 3 < movies.length) {
         let startIndex = this.state.startIndex;
         let endIndex = this.state.endIndex;
         this.setState({ startIndex: endIndex, endIndex: endIndex + 3 });
      }
      else if (this.state.endIndex < movies.length) {
         let startIndex = this.state.startIndex;
         let endIndex = this.state.endIndex;
         this.setState({ startIndex: endIndex, endIndex: endIndex + movies.length });
      }
      else {
         console.log('no data to show');
      }
   }

   handleEvents = (e) => {
      if (e.target.name === 'loadmore') {
         this.calculateIndex();
      }
   }

   movieDetail(movie) {
      this.props.history.push("/movie-detail", movie);
   }

   showMovieList(movies) {
      const tempMovieList = movies.slice(0, this.state.endIndex);
      return tempMovieList.map((movie) => {
         return (
            <div key={movie.id} className="col-sm-10">
               <div className="card">
                  <div className="card-body">
                     <h5 className="card-title">{movie.original_title}</h5>
                     <p className="card-text">Popularity {movie.popularity} | Vote Avg {movie.vote_average}</p>
                     <button onClick={() => this.movieDetail(movie)} className="btn btn-primary">View Details</button>
                  </div>
               </div>
            </div>
         );
      })

   }

   render() {
      const { movies, moviesFetched } = this.props;
      if (!moviesFetched) {
         return (<h1>...loading</h1>);
      } else {
         return (
            <div className="row">
               {this.showMovieList(movies)}
               <button className="col-sm-10" name="loadmore" onClick={this.handleEvents}>load more</button>
            </div>
         );
      }
   }
}

function mapStateToProps(state) {
   return {
      movies: state.movies.movies.results,
      moviesFetched: state.movies.fetched
   }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({fetchMovieList}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));