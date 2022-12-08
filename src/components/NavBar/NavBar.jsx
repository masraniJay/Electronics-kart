import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavBar() {

  return (
    <nav className='navbar'>
      <div className="navbar-item navbar-left">
      
      <div className="logo">
      <Link to="/">
      Electronics-Kart
      </Link>
      </div>
      
      </div>

      <div className="navbar-item navbar-right">
        <div className="navbar-right-item badge-base wishlist">
          <div className="badge">1</div>
          <FavoriteBorderOutlinedIcon />
        </div>
        <div className="navbar-right-item badge-base cart">
        <div className="badge">0</div>
          <ShoppingCartOutlinedIcon />
        </div>
        <button className='btn'>Login</button>
      </div>

    </nav>
  )
}
