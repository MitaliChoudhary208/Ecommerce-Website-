import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <>
  <nav className="navbar">
      <h2 className="navbar-title">Shopping Point</h2>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/add" className="nav-link">Add Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/update" className="nav-link">Update Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/logout" className="nav-link">Logout</Link>
        </li>
        <li className="nav-item">
          <Link to="/profile" className="nav-link">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar