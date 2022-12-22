import React, { createContext, useContext, useState, useEffect} from 'react';

const initialAuth = {
    isAuth: false,
    token: "",
    user: {}
};

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) =>{

    const [auth, setAuth] = useState(initialAuth);

    useEffect(() => {
        setAuth({
            isAuth: localStorage.getItem("token") ? true : false,
            token: localStorage.getItem("token"),
            user: JSON.parse(localStorage.getItem("user"))
        })
    }, [])

    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            { children }
        </AuthContext.Provider>
    )
}

export { useAuth, AuthContextProvider};