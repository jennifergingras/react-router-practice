import React, { Component } from 'react';
import API from '../quotes_obj.json';
import Quote from '../quote';

class About extends Component {

  componentWillMount() {
    console.log(API)
    // this.props.location.pathname)
    this.setState({
      quote: API[3].quote
    })
  }

  render() {
    return (
      <div>
        <Quote />
        <h2>About</h2>
      </div>
    );
  }
}

export default About;
