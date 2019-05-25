import React from "react";
import { store, persistor } from "./store";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import Details from "./views/DetailsView";
import List from "./views/ListView";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/list" exact component={List} />
            <Route path="/:id" component={Details} />
            <Redirect from="/" to="/list" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
