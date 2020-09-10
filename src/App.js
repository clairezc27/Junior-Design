import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Auth/login';
import Signup from './components/Auth/signup';
import Home from './components/Home/home';
import Dashboard from './components/Dashboard/dashboard';
import NewSearch from './components/NewSearch/newsearch'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login/" component={Login} />
              <Route exact path="/signup/" component={Signup} />
              <Route exact path="/dashboard/" component={Dashboard} />
              <Route exact path="/new-search/" component={NewSearch} />
            </Switch>
          </div>
        </Router>
      </header>
    </div>

    
  );
}

export default App;
