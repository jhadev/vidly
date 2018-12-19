import React, { Component } from "react";

class Jumbotron extends Component {
  state = {
    title: "vidly"
  };
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-4 text-center">{this.state.title}</h1>
        <p className="lead text-center">we got the movies</p>
      </div>
    );
  }
}

export default Jumbotron;
