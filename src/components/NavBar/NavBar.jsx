import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useAuth } from '../../contexts/auth-context';
import { useCart, useWishlist } from '../../contexts';
import { toast } from "react-toastify";

export default function NavBar() {

  const { setAuth, auth } = useAuth();

  const { cart } = useCart();

  const { wishlist } = useWishlist();

  const logOuthandler = () =>{
    setAuth({
      isAuth: false,
      token: "",
      user: {}
    })

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out!")
  }

  return (
    <nav className='navbar'>
      <div className="navbar-item navbar-left">
      
      <Link to="/">
      <div className="logo">
      Electronics-Kart
      </div>
      </Link>
      
      </div>

      <div className="navbar-item navbar-right">
        <Link to='/products'>
        <button className='btn'>Shop</button>
        </Link>
        
        <Link to="/wishlist">
        <div className="navbar-right-item badge-base wishlist">
          { auth.isAuth ? 
          <div className="badge">{wishlist.length}</div>
          :
          null
          }
          <FavoriteBorderOutlinedIcon />
        </div>
        </Link>


        <Link to="/cart">
        <div className="navbar-right-item badge-base cart">
        { auth.isAuth ? 
        <div className="badge">{cart.length}</div>
        :
        null
          }
          <ShoppingCartOutlinedIcon />
        </div>
        </Link>
        {
          auth.isAuth ?
          <button className='btn' onClick={()=>logOuthandler()}>Logout</button>
           : 
           <Link to="/Login">
          <button className='btn'>Login</button>
          </Link>
        }
      </div>

    </nav>
  )
}