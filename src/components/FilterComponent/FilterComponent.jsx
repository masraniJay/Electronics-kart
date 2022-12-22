import React from 'react'
import { useFilter } from '../../contexts/filter-contex';
import './filtercomponent.css';
export default function FilterComponent(){

    const { state, productDispatch } = useFilter();

    return(
        <aside>
            <div className='top'>
                
            <h2>Filters</h2>
            <button className='clear-btn'
            onClick={()=>productDispatch({type: "CLEAR"})}>Clear all</button>
            </div>

            <div className='top'>
            <h4>Price range:</h4>
            <span>₹0 to ₹{state.price}</span>
            </div>

            <input 
            className='slider'
            type='range'
            min='0'
            max='100000'
            step='1000'
            value={state.price}
            onChange={(e)=> productDispatch({type: "PRICE", payload: e.target.value})} />

            <h4>Category:</h4>
            <div> 
            <input 
            type='checkbox'
            id='fridge'
            value='fridge'
            checked={state.categories.fridge}
            onChange={(e)=>productDispatch({type: "FRIDGES"})} />
            <label htmlFor='fridge'>Fridge</label>
            </div>

            <div>
            <input 
            type='checkbox'
            id='PC'
            value='PC' 
            checked={state.categories.pc}
            onChange={(e)=>productDispatch({type: "PCS"})} />
            <label htmlFor='PC'>PC</label>
            </div>

            <div> 
            <input 
            type='checkbox'
            id='AC'
            value='AC'
            checked={state.categories.ac}
            onChange={(e)=>productDispatch({type: "AIR CONDITIONERS"})}  />
            <label htmlFor='AC'>AC</label>
            </div>
 
            <div>
            <input 
            type='checkbox'
            id='phone'
            value='phone' 
            checked={state.categories.phone}
            onChange={(e)=>productDispatch({type: "PHONES"})} />
            <label htmlFor='phone'>Phone</label>
            </div>

            <div>
            <input 
            type='checkbox'
            id='printer'
            value='printer'
            checked={state.categories.printer}
            onChange={(e)=>productDispatch({type: "PRINTERS"})}  />
            <label htmlFor='printer'>Printer</label>
            </div>

            <h4>Ratings:</h4>

            <div>
            <input 
            type='radio'
            name='rating'
            id='4'
            value='4'
            checked={state.rating === '4'}
            onChange={(e)=>productDispatch({type: "RATING", payload: e.target.value})} />
            <label htmlFor='4'>4 stars and above</label>
            </div>

            <div>
            <input 
            type='radio'
            name='rating'
            id='3'
            value='3'
            checked={state.rating === '3'}
            onChange={(e)=>productDispatch({type: "RATING", payload: e.target.value})} />
            <label htmlFor='3'>3 stars and above</label>
            </div>

            <div>
            <input 
            type='radio'
            name='rating'
            id='2'
            value='2'
            checked={state.rating === '2'}
            onChange={(e)=>productDispatch({type: "RATING", payload: e.target.value})} />
            <label htmlFor='2'>2 stars and above</label>
            </div>

            <div>
            <input 
            type='radio'
            name='rating'
            id='1'
            value='1'
            checked={state.rating === '1'}
            onChange={(e)=>productDispatch({type: "RATING", payload: e.target.value})} />
            <label htmlFor='1'>1 stars and above</label>
            </div>

            <h4>Sort by:</h4>
            
            <div>
            <input 
            type='radio'
            name='sort'
            id='high-to-low'
            checked={state.sortBy === "HIGH_TO_LOW"}
            onChange={(e) => productDispatch({type: "HIGH_TO_LOW"})} />
            <label htmlFor='high-to-low'>Price: High to low</label>
            </div>

            <div>
            <input 
            type='radio'
            name='sort'
            id='low-to-high'
            checked={state.sortBy === "LOW_TO_HIGH"}
            onChange={(e) => productDispatch({type: "LOW_TO_HIGH"})} />
            <label htmlFor='low-to-high'>Price: Low to high</label>
            </div>
        </aside>
    )
}