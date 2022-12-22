import {createContext, useContext, useState } from 'react';

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartcontextProvider = ({ children }) =>{

    const [cart, setCart] = useState([]);

    return(
        <CartContext.Provider value={{ cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
}

export {useCart, CartcontextProvider};