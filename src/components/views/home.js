import React, { Component } from 'react';
import API from "../quotes_obj.json";
import Quote from '../quote';

class Home extends Component {
  state = {
    quote: ""
  }



  render() {
    return (
      <div>
        <h2>Home</h2>
        <Quote
          quote={API[0].quote}
          author={API[0].author}
        />
      </div>
    );
  }
}

export default Home;