import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/home';
import About from './components/views/about';
import Portfolios from './components/views/portfolios';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>React Router Practice</h2>
          <Navbar />
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/design" component={Portfolios} />
            <Route path="/web" component={Portfolios} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
