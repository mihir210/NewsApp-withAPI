// import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
//   static propTypes = {second: third}

  render() {
    return (
      <div className='container my-3'>
        
        <h2>NewsMonkey top headlines</h2>
        
        <div className='row'>
          <div className="col-md-3">
            <NewsItem/>
          </div>
          <div className="col-md-3">
            <NewsItem/>
          </div>
          
          <div className="col-md-3">
            <NewsItem/>
          </div>
        </div>
      </div>
      
    )
  }
}
