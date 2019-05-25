import React from 'react';
import './App.css';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Details from "./DetailsView";
import List from "./ListView";

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/view/">Users</Link>
                </li>
              </ul>
            </nav>
            <Route path="/" exact component={List} />
            <Route path="/view/" component={Details} />
          </div>
      </Router>
    </Provider>
  );
}

export default App;
