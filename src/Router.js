import React from 'react'
import { Routes, Route } from 'react-router'
import Listings from './components/Listings';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Listings/>} />
            
        </Routes>
    );
};

export default Router;