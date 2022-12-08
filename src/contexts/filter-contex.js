import React, { createContext, useContext, useReducer} from 'react';
import { filterReducer } from '../Reducers/filterReducer';

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({ children }) =>{

    const [state, productDispatch] = useReducer(filterReducer, {
        sortBy: "",
        rating: 1,
        price: 500000,
        categories: {
            fridge: false,
            phone: false,
            ac: false,
            pc: false,
            printer: false
        }
    })

    return(
        <FilterContext.Provider value={{state, productDispatch}}>
            {children}
        </FilterContext.Provider>
    )
}

export {FilterProvider, useFilter};