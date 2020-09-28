import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';

console.log("hello??");

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </Router>
        </header>
      </div>  
    );
  }
});

// var Component1 = require("./components/component1.jsx");
// var Component2 = require("./components/component2.jsx");

// var App = React.createClass({
//   render: function() {
//     return (
//       <div className="container">
//         <Component1 />
//         <Component2 />
//       </div>
//     );
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);
