import React, { useState, useEffect } from 'react'
import './productlisting.css';
import axios from 'axios';
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import ProductCard from '../../components/ProductCard/ProductCard';
import { getSortedProducts, getPricedProducts, getRatedProducts, getCategorizedProducts } from '../../filterFunctions';
import { useFilter } from '../../contexts/filter-contex';

export default function Productlisting() {

  const { state } = useFilter();

  const [products, setproducts] = useState([]);

  const fetchProducts = async() =>{
    const { data : { products } } = await axios.get('/api/products');
    setproducts(products);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const sortedProducts = getSortedProducts(products, state);
  const pricedProducts = getPricedProducts(sortedProducts, state);
  const ratedProducts = getRatedProducts(pricedProducts, state) 
  const categorizedProducts = getCategorizedProducts(ratedProducts, state)
  

  return (
    <div className='product-layout'>
        <FilterComponent />
        <div className='product-component'>
            {
              categorizedProducts.map((product)=>
                <ProductCard product={product} key={product._id}/>
              )
            }
        </div>
    </div>
  )
}
