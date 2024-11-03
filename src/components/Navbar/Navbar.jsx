import React from 'react';

import banner from '../../assets/banner.jpg'

import { BsCart3 } from "react-icons/bs";


const Navbar = () => {
    const links = <>
        <li><a>Home</a></li>
        <li><a>Statistics</a></li>
        <li><a>Dashboard</a></li>
    </>
    return (
        <div className='relative'>

     
           

            <div className="navbar absolute text-white rounded-3xl bg-primary border-[7px] border-b1    ">
                
              
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
                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             {/* <li><a>Home</a></li>
                             <li><a>Statistics</a></li>
                             <li><a>Dashboard</a></li> */}
                             {links}
                         </ul>
                     </div>
                     <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                 </div>
                 <div className="navbar-center hidden lg:flex">
                     <ul className="menu menu-horizontal px-1">
                         {/* <li><a>Item 1</a></li>
                         <li>
                             <details>
                                 <summary>Parent</summary>
                                 <ul className="p-2">
                                     <li><a>Submenu 1</a></li>
                                     <li><a>Submenu 2</a></li>
                                 </ul>
                             </details>
                         </li>
                         <li><a>Item 3</a></li> */}
                         {links}
                     </ul>
                 </div>
                 <div className="navbar-end flex items-center gap-4 pr-4">
                     {/* <a className="btn">Button</a>  */}
                     <BsCart3 />
                     <i class="fa-solid fa-heart"></i>
                 </div>
                
 
              
              </div>


            
            

           

            

        </div>
    );
};

export default Navbar;