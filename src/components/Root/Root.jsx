import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export const cartContext = createContext(null);

const Root = () => {
    const [cart, setCart]= useState([]);
    return (
        <div className=''>
            <cartContext.Provider value={{cart,setCart}}>
                 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

            </cartContext.Provider>
            
        </div>
    );
};

export default Root;