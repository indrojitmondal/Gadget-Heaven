import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { WishContext, cartContext } from '../Root/Root';

const Dashboard = () => {

    const { cart, setCart } = useContext(cartContext);
    
    const { wish, setWish } = useContext(WishContext);
    const [cardActive, setCardActive]= useState(true);
    const [wishActive, setWishActive]= useState(false);
    return (
        <div>

            <Helmet>
                {/* <title>Gadget | Dashboard</title> */}
                {/* <meta name="description" content="Description of this page" /> */}
                {/* <link rel="icon" type="image/x-icon" href="/path/to/your/favicon.ico" /> */}
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png"  type="image/x-icon"/>
                
            </Helmet>
            <div className='bg-primary py-5 text-white'>





                <h1 className='text-center text-2xl font-bold'>Dashboard</h1>

                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='pt-3 flex justify-center items-center gap-4'>
                    <button className={`border ${cardActive? 'bg-white text-primary':'bg-primary text-white'} border-white px-10 rounded-[32px] py-1 text-lg`}>Cart</button>

                    <button className=' border border-white px-10 rounded-[32px] py-1 text-white text-lg'>Wishlist</button>
                </div>

            </div>
            <div>
                {
                    cardActive && 
                    <div className='px-10 flex items-center justify-between'> 
                         <h2 className='font-bold text-xl'>Cart</h2>
                         <div className='flex items-center gap-5'>
                            <h1 className='font-bold text-lg'>Total cost: 999.99</h1>
                            <button className='btn'>Short by Price</button>
                            <button className='btn'>Purchase</button>
                         </div>
                    </div>
                }
                  
            </div>
        </div>
    );
};

export default Dashboard;