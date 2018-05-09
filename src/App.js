import React, { Component } from 'react';
import MovieList from './components/movieList';
import TvList from './components/tvList';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <MovieList />
          </div>
          <div className="col-sm">
            <TvList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;