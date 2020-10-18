import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard.js";
import NewSearch from  "./components/newsearch";
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path = "/new-search" component = {NewSearch} />
            </Switch>
          </div>
        </Router>
      </header>
      </div>
    );
  }
}

export default App;
