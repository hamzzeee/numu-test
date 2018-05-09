import { combineReducers } from "redux";
import { getMovies, getTv } from "./moviesList";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
   movies: getMovies,
   tv: getTv,
   routing: routerReducer
});

export default rootReducer;