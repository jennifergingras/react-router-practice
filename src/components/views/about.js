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
        <h2>About</h2>
        <Quote
          quote={API[3].quote}
          author={API[3].author} />
      </div>
    );
  }
}

export default About;
