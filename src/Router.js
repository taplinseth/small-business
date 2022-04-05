import React from 'react'
import { Routes, Route } from 'react-router'
import BusinessDetails from './components/BusinessDetails';
import Listings from './components/Listings';
import Login from './components/Login';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/home" element={<Listings/>} />
            <Route path="/details" element={<BusinessDetails/>} />
        </Routes>
    );
};

export default Router;