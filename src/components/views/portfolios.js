import React, { Component } from 'react';
import API from '../quotes_obj.json';
import Project from '../projects';
import Quote from '../quote';
import utilities from '../utilities/utilities';

class Portfolios extends Component {



  // // utility 
  // pageStuff = API.find((obj) => {
  //   return obj.pageId === this.props.match.path
  // }

  // call utility function 





  render() {
    const pageStuff = utilities.getPage(this.props.match.path);
    console.log(this.props.match)
    return (
      <div>
        {/* <h2>{match.params.pageId}</h2> */}
        < Quote
          quote={pageStuff.quote}
          author={pageStuff.author}
        />
        <div className='project-list'>
          <p>Project list</p>
          <ul>
            <li>{pageStuff.projectlist.map((project, i) => (
              <Project key={i}
               />
            ))};
          </li>
          </ul>
        </div>
      </div >
    );
  }
}

export default Portfolios;