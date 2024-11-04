
import React, { useEffect, useState } from 'react';

import bannerImage from '../../assets/banner.jpg'

import { BsCart3 } from "react-icons/bs";
import { Link, NavLink, useLocation } from 'react-router-dom';


const Navbar = () => {
    const [heading, setHeading]= useState('');

    const location = useLocation();


    console.log(location.pathname);
    const path= location.pathname;

    useEffect(()=>{

        if(path==='/'){
            // console.log('yes');
            setHeading('Upgrade Your Tech Accessorize with Gadget Heaven Accessories');
        
        } 

    },[])
    

    const links = <>
        <li><Link to={'/'}>Home </Link></li>
        
        <li>  <Link to={'/statistics'}>Statistics</Link></li>
      
        <li>  <Link to={'/dashboard'}>Dashboard</Link></li>
      
    </>
    return (
        <div className= {`pb-10 ${path==='/'?'text-white rounded-3xl bg-primary border-[7px] border-b1':''}  `}>

           {/* text-white rounded-3xl bg-primary border-[7px] border-b1 */}
           

            <div className="navbar    ">
                
              
                <div className="navbar-start">
                     <div className="dropdown">
                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                             <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 className="h-5 w-5"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                     strokeLinecap="round"
                                     strokeLinejoin="round"
                                     strokeWidth="2"
                                     d="M4 6h16M4 12h8m-8 6h16" />
                             </svg>
                         </div>
                         <ul
                             tabIndex={0}
                             className="menu menu-sm dropdown-content text-white bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow">
                         
                             {links}
                         </ul>
                     </div>
                     <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                 </div>
                 <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal px-1">
                     
                         {links}
                     </ul>
                 </div>
                 <div className="navbar-end flex items-center gap-4 pr-4">
                     {/* <a className="btn">Button</a>  */}
                     <BsCart3 />
                     <i className="fa-solid fa-heart"></i>
                 </div>
                
 
              
            </div>

            <div className='bg-primary text-white'>

            <h1 className='text-center text-3xl font-bold'>{heading}</h1> 

<p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

<div className='w-1/12 py-4 mx-auto'>
     
<button className='bg-white  border border-white px-4 rounded-xl py-2 text-primary'>Shop Now</button>



</div>

            </div>

           

         

                
            <img className='h-[500px] px-20  rounded-xl w-full' src={bannerImage}  alt="" />



            

           
            

           

            

        </div>
    );
};

export default Navbar;
