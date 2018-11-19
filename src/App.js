import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import SecondDiv from './SecondDiv.js';
import Paragraphs from './Paragraphdiv.js';
import BoxesDiv from './BoxesDiv.js';
import  Brand from './Brand.js';
import Greendiv from './Greendiv.js';
import Paradiv from './Paradiv';
import Grid from './Grid.js';
import Footer from './Footer.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <SecondDiv/>
        <Paragraphs/>
        <BoxesDiv/>
        <Brand/>
        <Greendiv/>
        <Paradiv/>
        <Grid/>
        <Footer/>
      </div>
    );
  }
}

export default App;
