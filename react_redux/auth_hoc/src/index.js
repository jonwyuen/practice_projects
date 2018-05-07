import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Route, browserHistory } from "react-router";

import App from "./components/app";
import Resources from "./components/resources";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/resources" component={Resources} />
      </Route>
    </Router>
  </Provider>,
  document.querySelector(".container")
);

/* 
connect is hoc(adds additional data/functionality) that cmns w/ provider
provider wraps redux store and watches store
whenever redux store changes, provider tells connected component the newly changed state
*/
