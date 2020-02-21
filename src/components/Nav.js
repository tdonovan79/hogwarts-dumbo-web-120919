import piggy from "../porco.png";
import React from "react";
import Filter from "./Filter.js"
import GreaseBox from "./GreaseBox.js"

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span><br/>
      <Filter changeFilterTerm={props.changeFilterTerm}/>
      <GreaseBox changeGreaseStatus={props.changeGreaseStatus}/>
    </div>
  );
};

export default Nav;
