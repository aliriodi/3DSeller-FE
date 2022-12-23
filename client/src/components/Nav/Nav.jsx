import React from 'react'
import logo from './Logo.jpeg'

function Nav() {
  return (
    <div>
        	<div className="container">
  <div className="logo"><img className='imglogo' alt="" src={logo}/></div>
  <a href="/" className="item">Home</a>
  <a href="/productos" className="item">Productos</a>
  <a href="/" className="item">Contact</a>
  <a href="/" className="item">Archive</a>
  <a href="/" className="item">Resource</a>
  <a href="/" className="item">Help</a>
</div>
    </div>
  )
}

export default Nav