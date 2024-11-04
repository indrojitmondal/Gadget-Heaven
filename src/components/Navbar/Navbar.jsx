
import React, { createContext, useContext, useEffect, useState } from 'react';

import bannerImage from '../../assets/banner.jpg'

import { BsCart3 } from "react-icons/bs";
import { Link, NavLink, useLocation } from 'react-router-dom';
import Products from '../Products/Products';
import { cartContext } from '../Root/Root';
// export const cartContext = createContext(0);



const Navbar = () => {
    const [heading, setHeading] = useState('');
    const {cart}= useContext(cartContext);

    console.log('Cart length',cart.length);
    const handleCart =(x)=>{
        console.log(x)
        
    }

   

    const location = useLocation();


    console.log('Path:',location.pathname);
    const path = location.pathname;


    useEffect(() => {



        if (path === '/') {
            console.log('yes');
            setHeading('Upgrade Your Tech Accessorize with Gadget Heaven Accessories');

        }
        else if (path === '/statistics') {
            console.log('yes');
            setHeading('Statistics');

        }
        else if (path === '/dashboard') {
            console.log('yes');
            setHeading('Dashboard');

        }
      else if (path.includes('/product'))
      {
        setHeading("Product Details")
      }


    }, [path])


    const links = <>
        <li><Link to={'/'}>Home </Link></li>

        <li>  <Link to={'/statistics'}>Statistics</Link></li>

        <li>  <Link to={'/dashboard'}>Dashboard</Link></li>

    </>
    return (
        <>
            <div className={`  ${path === '/' ? 'text-white  rounded-3xl pb-10 bg-primary border-[7px] border-b1' : ''}  `}>

                {/* text-white rounded-3xl bg-primary border-[7px] border-b1 */}


                <div className=" navbar-section p-10 flex justify-between">


                    <div className="">


                        <h1 className='text-xl'>Gadget Heaven</h1>
                    </div>
                    <div className="flex">
                        <ul className=" flex gap-10 px-1">

                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4 pr-4">
                        {/* <a className="btn">Button</a>  */}
                         <div className='flex items-center gap-1'>
                             {/* <h3>1</h3> */}
                             <sup>{cart? cart: ''}</sup>
                             <BsCart3 />
                         </div>
                       
                        <i className="fa-solid fa-heart"></i>
                    </div>



                </div>

                {/* banner */}

                <div className='bg-primary py-5 text-white'>



                  

                    <h1 className='text-center text-2xl font-bold'>{heading}</h1>

                    <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                    <div className='flex py-4 justify-center gap-5 items-center'>

                        {

                            path === '/' &&

                            <a href="#products">
                                <button

                                    className='bg-white  border border-white px-4 rounded-xl py-2 text-primary'>Shop Now
                                </button>

                            </a>


                        }
                        {
                            path === '/dashboard' && <>

                                <button className='bg-white  border border-white px-4 rounded-xl py-2 text-primary'>Cart</button>


                                <button className='bg-white  border border-white px-4 rounded-xl py-2 text-primary'>Wishlist</button>


                            </>

                        }




                    </div>

                </div>

                {path === '/' &&

                    <div className=''>

                        <div className='px-20'>
                            <img src={bannerImage} className='h-[400px] w-full' alt="" />
                        </div>

                    </div>

                }























                

            </div> 
            <div id='products' className=' pt-4'>

                { 
                   path==='/' &&
                 
                      <Products  ></Products>
                  
                    
                }

               

            </div>
        </>

    );
};

export default Navbar;
