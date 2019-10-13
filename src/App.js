// App.js

import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import {projects as Projects} from './components/Projects';
import ProjectDetails from './components/ProjectDetails';

import { Switch, Route } from 'react-router-dom';
import {  Redirect } from 'react-router'

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={Home}/>
          
          
          <Route path='/about' component={About}/>

          <Route exact path='/projects' component={Projects}/>
          <Route exact path="/projects/:id" component={ProjectDetails} />


          <Route exact path="/pepe" render={() => (
  
                        <Redirect  to="/projects"/>// push??
  
                   )}/>

        </Switch>

      </div>
    );
  }
}

export default App;