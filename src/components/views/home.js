import React, { Component } from 'react';
import API from "../quotes_obj.json"

class Home extends Component {
  state = {
    quote: ""
  }

  componentWillMount() {
    console.log(API)
    this.setState({
      quote: API[0].quote
    })

  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default Home;