import { useCart } from '../../contexts';
import './pricecard.css'
export default function PriceCard() {

    const { cart } = useCart();

    const totalPrice = cart.reduce((acc, curr) => { 
        acc.price += curr.originalPrice * curr.qty;
        acc.discount += (curr.originalPrice - curr.discountedPrice) * curr.qty;

        return acc;
    }, 
    {
        price: 0,
        discount: 0
    });

    const finalAmount = totalPrice.price - totalPrice.discount + 500;

    return(
        <div className="price-card">
            
            <div className="price-title">
                Price Details
                <hr/>
            </div>

            <div className="price-card-details">
                <div className="price-card-details-disc">
                    <p>Price({cart.length} items)</p>
                    <p>Discount</p>
                    <p>Delivery charges</p>
                    <hr />
                    <p>Total Amount</p>
                </div>

                <div className="price-card-details-charges">
                    <p>₹ {totalPrice.price}</p>
                    <p>- ₹ {totalPrice.discount}</p>
                    <p>₹ 500</p>
                    <hr />
                    <p>₹ {finalAmount}</p>
                </div>
            </div>
            <p className='price-card-text'>You wil save ₹ {totalPrice.discount} on this purchase</p>

            <button className='price-card-btn' >Place Order</button>

        </div>
    );
}