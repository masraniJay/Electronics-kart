import WishlistCard from '../../components/wishlist/wishlistCard';
import './wishlist.css'
import { fetchWishlist } from '../../Utilities/WishlistServices';
import { useEffect } from 'react';
import { useWishlist } from '../../contexts';

const token = localStorage.getItem("token");

export default function Wishlist(){

    const { wishlist, setWishlist } = useWishlist();

    useEffect(()=>{ fetchWishlist(token, setWishlist) }, [setWishlist]);

    return(
        <div className="wishlist-layout">
            {
                wishlist.length > 0 ?

                    wishlist.map(product => <WishlistCard product={product}/> )
                :
                    <h2 className='empty-wishlist'>Your Wishlist Is Empty 😫 !</h2>
            }
            
            
        </div>
    );
}