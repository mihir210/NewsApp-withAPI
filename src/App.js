
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Switch, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import About from './components/About';


export default class App extends Component {
  apikey = process.env.REACT_APP_news_api;
  state = {
    progress:0
  }
  
  setProgress = (progress) =>{
    this.setState({progress :progress });
  }
  render() {

    return (
      <div>
        

        <LoadingBar
        color='red'
        progress={this.state.progress}
        height={4}

          
      />
              <Navbar/>
        <Switch>
          <Route exact path='/'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="general" pageSize={9} country = "in"/>
          </Route>
          <Route exact path='/business'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="business" pageSize={9} country = "in" category = "business"/>
          </Route>
          
          <Route exact path='/about'>
          <About/>
          </Route>
          
  
          <Route exact path='/health'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="health" pageSize={9} country = "in" category = "health"/>
          </Route>
          <Route exact path='/science'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="science" pageSize={9} country = "in" category="science"/>
          </Route>
          <Route exact path='/sports'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="sports" pageSize={9} country = "in" category="sports"/>
          </Route>
          <Route exact path='/technology'>
          <News setProgress={this.setProgress} apikey = {this.apikey} key="technology" pageSize={9} country = "in" category="technology"/>
          </Route>
          
        </Switch>
        {/* <News setProgress={this.setProgress} apikey = {this.apikey} key="general" pageSize={4} country = "in" category = "science"/> */}
   
        </div>
    )
  }
}
