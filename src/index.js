import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Routes from "./config/routes";

ReactDOM.render(
<Provider store={store}>
   <Routes />
   {/* <App /> */}
</Provider>
   ,document.getElementById('root'));
