const initialState = {
   fetching: false,
   fetched: false,
   movies: [],
   error: null
}

export const getMovies = (state = initialState, action) => {
   switch(action.type) {
   case "REQUEST_MOVIE_LIST":
      return { ...state, fetching: true }
      break;
   case "RECEIVE_MOVIE_LIST":
      return {...state, fetching: false, fetched: true, movies: action.payload}
      break;
   case "REQUEST_MOVIE_LIST_FAILED":
      return {...state, error: action.payload, fetching: false, fetched:false}
      break;
   }
   return state;
}

export const getTv = (state = {
   fetching: false,
   fetched: false,
   tv: [],
   error: null
}, action) => {
   switch(action.type) {
   case "REQUEST_TV_LIST":
      return { ...state, fetching: true }
      break;
   case "RECEIVE_TV_LIST":
      return {...state, fetching: false, fetched: true, tv: action.payload}
      break;
   case "REQUEST_TV_LIST_FAILED":
      return {...state, error: action.payload, fetching: false, fetched:false}
      break;
   }
   return state;
}