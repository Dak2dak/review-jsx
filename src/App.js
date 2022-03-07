import React, { Component } from 'react';
import './App.css';
import myImage from './imageInSrc.jfif';
import Yoyo from './components/Yoyo';
import AnotherComponent from './components/AnotherComponent';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <Yoyo img = {myImage} />
        <AnotherComponent />
      </div>
    );
  }
}

export default App;
