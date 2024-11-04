import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const cartContext = createContext([]);
export const WishContext = createContext([]);

const Root = () => {
    const [cart, setCart]= useState([]);
    const [wish, setWish]= useState([]);
    return (
        <cartContext.Provider value={{ cart, setCart }}>
        <WishContext.Provider value={{ wish, setWish }}>
            <div>
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </WishContext.Provider>
    </cartContext.Provider>
    );
};

export default Root;