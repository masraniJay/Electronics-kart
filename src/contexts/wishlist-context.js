import { useState, createContext, useContext } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) =>{

    const [ wishlist, setWishlist ] = useState([]);

    return(
        <WishlistContext.Provider value={{wishlist, setWishlist}}>
            { children }
        </WishlistContext.Provider>
    );
}

const useWishlist = () => useContext(WishlistContext);

export { useWishlist, WishlistProvider };