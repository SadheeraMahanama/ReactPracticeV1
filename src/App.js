import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header/Header'
import SideNav from '../src/components/header/SideNav'
import { withRouter } from "react-router-dom";
 

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header></Header>       
      <SideNav></SideNav>
         
      </div>
    );
  }
}

export default withRouter(App);
