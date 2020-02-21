import React, { Fragment } from "react";
import HogTile from "./HogTile.js"

class HogContainer extends React.Component {


  renderHogs= () => {
    let hogTiles = this.props.hogs.map(thisHog => (
      <HogTile 
      hog = {thisHog}
      key = {thisHog.name}/>
    ))
    return hogTiles
  }
  render() {
    
    return (
      <div>
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogContainer;
