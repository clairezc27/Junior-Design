//import Home from "./components/Home";
import React from "react";
import ReactDOM from "react-dom";
import Landing from "./components/Landing";
import { Button } from 'react-bootstrap';
import { Row, Col, Divider } from 'antd';
import {Router, Route} from 'react-router';

const HomePage = () => {
  return <Landing />
};

// render(
//   <Router>
//     <Route path="/" component={Home}/>
//   </Router>,
//   document.getElementById('render-react-here')
// );

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("render-react-here")
);