import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard.js";
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'antd';
import { Button } from 'react-bootstrap';
import Box from './components/common/box.js';
import Header from './components/common/header.js'

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
            </Switch>
          </div>
        </Router>
      </header>
      </div>
    );
  }
}

export default App;
