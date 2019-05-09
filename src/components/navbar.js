import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'}> Home </Link></li>
            <li><Link to={'/design'}>Design</Link></li>
            <li><Link to={'/web'}>Web</Link></li>
            <li><Link to={'/about'}>About</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;