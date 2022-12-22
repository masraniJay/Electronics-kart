import StarIcon from '@mui/icons-material/Star';
import { useAuth, useWishlist, useCart } from '../../contexts';
import { removeFromWishlist } from '../../Utilities/WishlistServices';
import { addToCart } from '../../Utilities/CartServices';

export default function WishlistCard({product}) {

    const { auth: { token }} = useAuth();

    const { setWishlist } = useWishlist();

    const { cart, setCart } = useCart();

    const {
        _id,
        name,
        originalPrice,
        discountedPrice,
        discountPercentage,
        rating,
        image,
      } = product;

    

    return(
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
       cart.find(p=>p._id === _id) ? 
      null
    :
      <button className="product-card-btn product-card-cart-btn" onClick={()=>{
        addToCart(product, token, setCart);
        removeFromWishlist(_id, token, setWishlist)}}>Move to cart</button>
      
    }
      <button className="product-card-btn product-card-wishlist-btn" onClick={()=>removeFromWishlist(_id, token, setWishlist)}>Remove from wishlist</button>
    </div> 
    );
}