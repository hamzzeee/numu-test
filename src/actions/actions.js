import axios from "axios";

export const fetchMovieList = () => {
   return function(dispatch) {
      dispatch(requestMovieList());
      return axios.get(
         "https://api.themoviedb.org/3/discover/movie?api_key=969bf83e0445250265e57259598771c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      ).then((response) => {
         dispatch(receiveMovieList(response.data));
      }).catch((err) => {
         dispatch(requestMovieListFailed(err));
      })
   }
}

function requestMovieList() {
   return {
      type: "REQUEST_MOVIE_LIST"
   }
}

function receiveMovieList(movies) {
   return {
      type: "RECEIVE_MOVIE_LIST",
      payload: movies
   }
}

function requestMovieListFailed(err) {
   return {
      type: "REQUEST_MOVIE_LIST_FAILED",
      payload: err
   }
}

export const fetchTvList = () => {
   return function(dispatch) {
      dispatch(requestTvList());
      return axios.get(
         "https://api.themoviedb.org/3/discover/tv?api_key=969bf83e0445250265e57259598771c2&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false"
      ).then((response) => {
         dispatch(receiveTvList(response.data));
      }).catch((err) => {
         dispatch(requestTvListFailed(err));
      })
   }
}

function requestTvList() {
   return {
      type: "REQUEST_TV_LIST"
   }
}

function receiveTvList(tv) {
   return {
      type: "RECEIVE_TV_LIST",
      payload: tv
   }
}

function requestTvListFailed(err) {
   return {
      type: "REQUEST_TV_LIST_FAILED",
      payload: err
   }
}