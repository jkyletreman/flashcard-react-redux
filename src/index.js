import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
// importing stack because its default, just calling it rootReducer for convention
import rootReducer from "./reducers";
import App from "./components/App";
import Stack from "./components/Stack";
import { setStack } from "./actions";

const store = createStore(rootReducer);
// fire off code when store updates
// code with getState of the store
store.subscribe(() => {
  console.log("store", store.getState());
});
store.dispatch(setStack({ id: 0, title: "example", cards: [] }));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/stack" component={Stack} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
