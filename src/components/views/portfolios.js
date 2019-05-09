import React, { Component } from 'react';
import API from '../quotes_obj.json';
import Project from '../projects';

class Portfolios extends Component {


  componentWillMount() {
    console.log(API) 
    // this.props.location.pathname)
    this.setState({
      quote: API[1].quote
    })
  }

  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <div className='project-list'>
          <p>Project list</p>
          {/* <ul>
              <li>{this.state.projectlist.map((project, i) => (
                <Project key={i} />
              ))}; */}
          {/* </li>
            </ul> */}
        </div>
      </div>
    );
  }
}

export default Portfolios;