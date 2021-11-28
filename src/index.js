import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./index.scss"
import { BrowserRouter as Router } from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./store/reducer";
import {requestMiddleware} from "./helpers/redux-request";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(requestMiddleware)),
)
requestMiddleware.on.fail = ((err) => {
    if (err.response) {
        return err.response;
    }
    throw err;
});
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
          <App />
      </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
