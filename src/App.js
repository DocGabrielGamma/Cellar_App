import React from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Details from "./DetailsView";
import List from "./ListView";

function App() {
  return (
    <Provider store={store}>
        <Router>
            <Switch>
              <Route path="/list" exact component={List} />
              <Route path="/:id" component={Details} />
              <Redirect from="/" to="/list" />
            </Switch>
      </Router>
    </Provider>
  );
}

export default App;
