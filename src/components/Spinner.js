import React, { Component } from 'react'
import loading from './load.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
         <img className='my-5' src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner