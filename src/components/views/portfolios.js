import React, { Component } from 'react';
import API from '../quotes_obj.json';
import Project from '../projects';
import Quote from '../quote';
import utilities from '../utilities/utilities';

class Portfolios extends Component {
  render() {
    // use utility function - variable needs to be under render so that it can be displayed
    const pageStuff = utilities.getPage(this.props.match.path);
    console.log(this.props.match)
    return (
      <div>
        < Quote
          quote={pageStuff.quote}
          author={pageStuff.author}
        />
        <div className='project-list'>
          <p>Project list</p>
          <ul>
            <li>{pageStuff.projectlist.map((project, i) => (
              <Project key={i}
              title={project.title}
               />
            ))}
          </li>
          </ul>
        </div>
      </div >
    );
  }
}

export default Portfolios;