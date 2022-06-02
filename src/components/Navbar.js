import React from 'react'
import logo from '../weather.png'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-flex justify-content-between" href="/">
                <img src={logo} alt="logo" width="40" height="40" className="d-inline-block align-text-top" />
                <div className='my-2 mx-2'>Weather Lens</div>
                </a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar