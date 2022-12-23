import axios from 'axios';


const addToCart = async(product, token, setCart) =>{

    const { data } = await axios.post('/api/user/cart', { product }, { headers: {authorization: token }});

    setCart(data.cart);

};

const removeFromCart = async(productId, token, setCart) =>{

    const { data } = await axios.delete(`/api/user/cart/${productId}`, { headers: { authorization: token}});

    setCart(data.cart);
}

const quantityChangeHandler = async(productId, token, type, setCart)  =>{

    const { data } = await axios.post(`/api/user/cart/${productId}`, { action: { type: type}}, { headers: { authorization : token}});;

    setCart(data.cart);

}

export { addToCart, removeFromCart, quantityChangeHandler };