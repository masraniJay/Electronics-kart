import axios from 'axios';

const fetchWishlist = async ( token, setWishlist) =>{

    const { data : { wishlist } } = await axios.get('/api/user/wishlist', { headers: { authorization : token}});

    setWishlist(wishlist);

};

const addToWishlist = async (product, token, setWishlist) => {

    const { data: { wishlist }} = await axios.post('/api/user/wishlist', { product }, { headers: { authorization : token}});

    setWishlist(wishlist);
};

const removeFromWishlist = async (productId, token, setWishlist) => {

    const { data: { wishlist }} = await axios.delete(`/api/user/wishlist/${productId}`, {headers: { authorization: token}});

    setWishlist(wishlist);
}

export { fetchWishlist, addToWishlist, removeFromWishlist };