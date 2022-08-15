// import PropTypes from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = (p)=>{

    return (   
      <>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <NavLink exact  className="navbar-brand" to="/">NewsMonkey</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact className="nav-Navlink active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/business">business</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/">general</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/health">health</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/science">science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/sports">sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact className="nav-Navlink" to="/technology">technology</NavLink>
        </li>
      </ul>      
    </div>
  </div>
</nav>
</>
    )
  }

export default Navbar