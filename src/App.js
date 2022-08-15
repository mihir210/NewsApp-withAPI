
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Switch, Route} from 'react-router-dom';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/'>
          <News key="general" pageSize={9} country = "in"/>
          </Route>
          <Route exact path='/business'>
          <News key="business" pageSize={9} country = "in" category = "business"/>
          </Route>
          
  
          <Route exact path='/health'>
          <News key="health" pageSize={9} country = "in" category = "health"/>
          </Route>
          <Route exact path='/science'>
          <News key="science" pageSize={9} country = "in" category="science"/>
          </Route>
          <Route exact path='/sports'>
          <News key="sports" pageSize={9} country = "in" category="sports"/>
          </Route>
          <Route exact path='/technology'>
          <News key="technology" pageSize={9} country = "in" category="technology"/>
          </Route>
          
        </Switch>
        {/* <News key="general" pageSize={4} country = "in" category = "science"/> */}
   
        </div>
    )
  }
}
