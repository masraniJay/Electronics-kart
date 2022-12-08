import React from "react";
import "./productcard.css";
import StarIcon from '@mui/icons-material/Star';

export default function ProductCard({ product }) {
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
    <div>
      { inStock ? 
      <div key={_id} className="product-card">
      <img src={image} alt='product' className="product-img" />
      <div className="product-name">{name}</div>
      <tag className="product-rating">{rating} < StarIcon className="star"/></tag>
      <div className="product-prices">
      <span className="discounted-price product-prices-details">₹{discountedPrice} </span>
      <span className="original-price product-prices-details">₹{originalPrice}</span>
      <span className="discount-percentage  product-prices-detail">{discountPercentage}% off</span>
      </div>
      <button className="product-card-btn product-card-cart-btn">Add to cart</button>
      <button className="product-card-btn product-card-wishlist-btn">Add to wishlist</button>
    </div> 
       : 
       <div key={_id} className="product-card overlay-card">
        <div className="overlay-text">Out Of Stock</div>
      <img src={image} alt='product' className="product-img" />
      <div className="product-name">{name}</div>
      <tag className="product-rating">{rating} < StarIcon className="star"/></tag>
      <div className="product-prices">
      <span className="discounted-price product-prices-details">₹{discountedPrice} </span>
      <span className="original-price product-prices-details">₹{originalPrice}</span>
      <span className="discount-percentage  product-prices-detail">{discountPercentage}% off</span>
      </div>
      <button className="product-card-btn product-card-cart-btn overlay-btn">Add to cart</button>
      <button className="product-card-btn product-card-wishlist-btn overlay-btn">Add to wishlist</button>
    </div> 
       }
    </div>
  )
}
