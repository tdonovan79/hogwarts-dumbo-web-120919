import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./HogContainer";

class App extends Component {
  state = {
    filterTerm: '',
    hogsArray: hogs,
    isItGreasy: false
  }

  changeFilterTerm = (text) => {
    this.setState({
      filterTerm: text
    })
  }

  filterHogs = () => {
    let {hogsArray, filterTerm} = this.state
    let filteredHogsArray = hogsArray.filter(hog => {
      return hog.name.toLowerCase().includes(filterTerm)
    })
    return filteredHogsArray
  }

  changeGreaseStatus = () => {
    
  }

  render() {

    return (
      <div className="App">
        <Nav changeFilterTerm={this.changeFilterTerm} changeGreaseStatus={this.changeGreaseStatus}/>
        <HogContainer hogs={this.filterHogs()} filterTerm={this.filterTerm}/>
      </div>
    );
  }
}

export default App;
