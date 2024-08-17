import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className='navbar flex-h gap-lg'>
      <p className="navlink">Home</p>
      <p className="navlink">About</p>
      <p className="navtitle">VisionID</p>
      <p className="navlink">FAQ</p>
      <p className="navlink">Contact</p>
      <div className="hide"><MenuIcon /></div>
    </div>
  )
}

export default Navbar
