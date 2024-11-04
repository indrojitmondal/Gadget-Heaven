import React from 'react';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
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
                    <button className='bg-white  border border-white px-10 rounded-[32px] py-2 text-primary'>Cart</button>

                    <button className='bg-white  border border-white px-10 rounded-[32px] py-2 text-primary'>Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;