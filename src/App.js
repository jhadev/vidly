import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Jumbotron/>
      <main className="container">
      <Movies/>
      </main>
      </React.Fragment>
    );
  }
}

export default App;
