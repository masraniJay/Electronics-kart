import "./cartcard.css";
import StarIcon from "@mui/icons-material/Star";
import {
  removeFromCart,
  quantityChangeHandler,
} from "../../Utilities/CartServices";
import { addToWishlist } from '../../Utilities/WishlistServices';
import { useCart, useWishlist } from "../../contexts";

export default function CartCard({ product }) {
  const { setCart } = useCart();

  const { wishlist, setWishlist } = useWishlist();

  const token = localStorage.getItem("token");

  return (
    <div className="cart-card">
      <img src={product.image} className="cart-card-img" alt="product" />

      <div className="cart-card-details">
        <div className="cart-card-name">{product.name}</div>

        <div className="product-rating">
          {product.rating} <StarIcon className="star" />
        </div>

        <div className="cart-card-prices">
          <span className="discounted-price product-prices-details">
            ₹{product.discountedPrice}{" "}
          </span>
          <span className="original-price product-prices-details">
            ₹{product.originalPrice}
          </span>
          <span className="discount-percentage  product-prices-detail">
            {product.discountPercentage}% off
          </span>
        </div>

        <div className="cart-card-quantity">
          {product.qty < 5 ? (
            <button
              className="cart-card-quantity-btn"
              onClick={() =>
                quantityChangeHandler(product._id, token, "increment", setCart)
              }
            >
              +
            </button>
          ) : (
            <button className="cart-card-quantity-btn btn-disable">+</button>
          )}

          <span className="cart-card-quantity-display">{product.qty}</span>

          {
            (product.qty === 1 ? (
              <button className="cart-card-quantity-btn btn-disable">-</button>
            ) : (
              <button
                className="cart-card-quantity-btn"
                onClick={() =>
                  quantityChangeHandler(
                    product._id,
                    token,
                    "decrement",
                    setCart
                  )
                }
              >
                -
              </button>
            ))
          }
        </div>

        <button
          className="product-card-btn product-card-cart-btn"
          onClick={() => removeFromCart(product._id, token, setCart)}
        >
          Remove from cart
        </button>

        {
          wishlist.find(p=>p._id === product._id) ?
          null
          :
          <button className="product-card-btn product-card-wishlist-btn" onClick={()=>{
            addToWishlist(product, token, setWishlist);
            removeFromCart(product._id, token, setCart);
          }}>
          Move to wishlist
        </button>
        }

        

      </div>
    </div>
  );
}
