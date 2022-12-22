import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import "./homepage.css";
import banner from "../../Assets/banner.jpg";
import { useFilter } from "../../contexts/filter-contex";

export default function HomePage() {

    const [categories, setcategories] = useState([]);

    const { productDispatch } = useFilter();

    const fetchCategories = async() =>{
        const { data : { categories } }  = await axios.get('/api/categories');
        setcategories(categories);
    }

    useEffect(() => {
      fetchCategories();   
    }, [])
    
   
  return (
    <div className="main-wrapper">
      <img
        className="banner-img"
        src={banner}
        alt="banner"
        
      />

      <h2>One stop solution for all your Gadgets need!</h2>
      <p className="home-text">
        Welcome to Electronics-Kart, your one stop solution to all your Gdgets
        need. From phones, PCs, Printers and many more just browse the store and
        we'll definetly serve you with the best! The best quality with the best available prices you could ever get.
      </p>

      <h2>Categories</h2>

      <div className="category-container">

      {
        categories.map((category)=>
            <Link to='/products' key={category._id}>
            <div className="card" onClick={()=>{
              productDispatch({type: "CLEAR"});
              productDispatch({type: category.categoryName.toUpperCase()});
              }}>
                <img className="category-img" src={category.image} alt='category'/>
                <h5 className="category-name">{category.categoryName}</h5>
            </div>
            </Link>
        )
      }

     </div>

      
    </div>
  );
}
