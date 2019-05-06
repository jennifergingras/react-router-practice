import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolios from './components/pages/portfolios';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>React Router Practice</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/design'} className="nav-link">Design</Link></li>
              <li><Link to={'/web'} className="nav-link">Web</Link></li>
              <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/design' component={Portfolios} />
            <Route path='/web' component={Portfolios} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
