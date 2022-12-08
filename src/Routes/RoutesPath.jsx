import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Productlisting from '../pages/Productlisting/productlisting';
import Mockman from "mockman-js";


export default function RoutesPath(){

    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Productlisting />} />
            <Route path="/mock" element={<Mockman />} />
        </Routes>
    );
}
