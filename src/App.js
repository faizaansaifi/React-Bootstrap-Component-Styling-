import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navbar';
import Slide from './components/slide';
import CardContainer from './components/card_container';
import Advertisement from './components/advertisement';
import Brands from './components/brands';
import Brand2 from './components/brand-2';

class App extends Component {
  render() {
    return (
      <div className="App">
      
        <Navigation/>
        <Slide />
        <CardContainer/>
        <Advertisement/>
        <h2 style={{marginLeft:'88px'}} className="focused-brands">BRANDS IN FOCUS</h2>
        <p  style={{marginLeft:'88px',marginBottom:'15px'}} >Show some brand love</p>
        <Brands/>
        <Brand2/>
      </div>
    );
  }
}

export default App;
