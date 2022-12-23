import React, { useEffect } from 'react'
import CartCard from '../../components/CartComponent/CartCard';
import './cartpage.css'
import { useCart } from '../../contexts/index';
import axios from 'axios';
import PriceCard from '../../components/PriceCard/priceCard';

export default function CartPage(){

    const { cart, setCart } = useCart();
    
    const fetchCart = async() =>{
        
        const encodedToken = localStorage.getItem("token");

        const {data:{ cart }} = await axios.get('/api/user/cart', { headers: { authorization: encodedToken }});

        setCart(cart);

    }

    useEffect(()=>{
        fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(<>

    { cart.length === 0 ?
    <div  className="empty-cart">
    <h2>Your Cart Is Empty 😫 !</h2>
    </div>
:
     <div className="cart-page">

     <div className="cart-container">{
    cart.map((product)=><CartCard product={product}/>)
    }
     </div>

     <div className="price-card-container">
        <PriceCard />
     </div>
     
     </div>

}
    </>
    );
}