import React, {Component} from 'react';

import './Photo.css';
import { Avatar } from '@material-ui/core';

class Background extends Component{
constructor(){
  super();
  this.state = {
    pictures: []
  }
}

componentDidMount(){
  fetch('https://randomuser.me/api/')
    .then(results => {
     return results.json()
    })
    .then(data => {
      let pictures = data.results.map((pic) => {
        return (
          <div key = {pic.results}>
            <Avatar src = {pic.picture.thumbnail} />
          </div>
        )
      })
      this.setState({
        pictures: pictures
      })
    })
}

render(){
  return(
    <div>
      {this.state.pictures}
    </div>
  )
}

}

export default Background