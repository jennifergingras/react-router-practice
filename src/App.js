import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolios from './components/pages/portfolios';
import Quote from './components/quote';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>React Router Practice</h2>
          <Navbar />
          <hr />
          <Quote />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/portfolio/:id" component={Portfolios} />
            {/* <Route path="/web" component={Portfolios} /> */}
            <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
