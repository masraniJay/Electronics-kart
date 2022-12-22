import React from "react";
import "./productcard.css";
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star';
import { addToCart } from '../../Utilities/CartServices';
import { addToWishlist } from '../../Utilities/WishlistServices';
import { useAuth, useCart, useWishlist } from '../../contexts/index';

export default function ProductCard({ product }) {

  const { cart, setCart } = useCart();

  const { wishlist, setWishlist } = useWishlist();

  const { auth: { isAuth }} = useAuth();

  const token = localStorage.getItem("token");

  const {
    _id,
    name,
    originalPrice,
    discountedPrice,
    discountPercentage,
    rating,
    inStock,
    image,
  } = product;

  return( 
       inStock ? 
      <div key={_id} className="product-card">
      <img src={image} alt='product' className="product-img" />
      <div className="product-name">{name}</div>
      <div className="product-rating">{rating} < StarIcon className="star"/></div>
      <div className="product-prices">
      <span className="discounted-price product-prices-details">₹{discountedPrice} </span>
      <span className="original-price product-prices-details">₹{originalPrice}</span>
      <span className="discount-percentage  product-prices-detail">{discountPercentage}% off</span>
      </div>

      {
        isAuth ?
      ( cart.find(p=>p._id === _id) ? 
      <button className="product-card-btn product-card-cart-btn">
        <Link to="/cart">
        Show Cart
        </Link>
        </button>
    :
      <button className="product-card-btn product-card-cart-btn" onClick={()=>addToCart(product, token, setCart)}>Add to cart</button>
      )
      :
      (
        <button className="product-card-btn product-card-cart-btn">
        <Link to="/login">
        Add to cart
        </Link>
        </button>
      )
    }

    {
      isAuth ?
      ( wishlist.find(p => p._id === _id) ?
        <button className="product-card-btn product-card-wishlist-btn">
        <Link to="/wishlist">
        Show Wishlist
        </Link>
        </button>
        :
        <button className="product-card-btn product-card-wishlist-btn" onClick={()=>addToWishlist(product, token, setWishlist)}>Add to wishlist</button>)
        :
        (
          <button className="product-card-btn product-card-wishlist-btn">
        <Link to="/login">
        Add to wishlist
        </Link>
        </button>
        )
    }
      


    </div> 
       : 
       <div key={_id} className="product-card overlay-card">
        <div className="overlay-text">Out Of Stock</div>
      <img src={image} alt='product' className="product-img" />
      <div className="product-name">{name}</div>
      <div className="product-rating">{rating} < StarIcon className="star"/></div>
      <div className="product-prices">
      <span className="discounted-price product-prices-details">₹{discountedPrice} </span>
      <span className="original-price product-prices-details">₹{originalPrice}</span>
      <span className="discount-percentage  product-prices-detail">{discountPercentage}% off</span>
      </div>
      <button className="product-card-btn product-card-cart-btn overlay-btn">Add to cart</button>
      <button className="product-card-btn product-card-wishlist-btn overlay-btn">Add to wishlist</button>
    </div> 
  )
  
}
