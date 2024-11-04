import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Product from '../Product/Product';

const Products = () => {

    const [activateCategory, setActiveCategory]= useState('');
    const [allProducts,setAllProducts]= useState([]);
    const [activeProducts,setActiveProducts]= useState([]);

    useEffect( ()=>{
        fetch('allProducts.json')
        .then ( res=> res=res.json())
        .then (data =>
            { setAllProducts(data) 
            setActiveProducts(data)
            }
        );
    },[])

    const handleCategory= category=>{

        console.log(category);

        const newData= allProducts.filter( p=> p.category===category );
        console.log('New Data:', newData);



        setActiveCategory(category);
        setActiveProducts(newData);

    }
    return (
        <div className='p-10'>
            <h1 className='text-2xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>

            <section className='grid grid-cols-12 gap-8'>


                <div className="sidebar col-span-2 ">

                    {/* border border-primary px-3 py-2 bg-primary text-white */}

                    
                   <div className='border border-gray-300 rounded-xl p-4'> 
                      <h2 className='border text-center border-primary rounded-xl px-3 py-2 bg-primary text-white'>All Products</h2> 

                       <div className='pt-5 flex flex-col gap-3'>
                            <button onClick={()=>{handleCategory('Laptop')}}  className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Laptops</button>
                            <button onClick={()=>{handleCategory('Phones')}} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Phones</button>
                            <button onClick={()=>{handleCategory('Accessories')}} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Accessories</button>
                            <button onClick={()=>{handleCategory('Smart Watches')}} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Smart Watches</button>
                            <button onClick={()=>{handleCategory('MacBook')}} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>MacBook</button>
                            <button onClick={()=>{handleCategory('Iphone')}} className='border text-center border-gray-300 rounded-xl px-3 py-2 bg-gray-300 text-black'>Iphone</button>
                       </div>
                   
                   </div>

                </div>

                <div className="content col-span-10">
                    
                    <div className='grid grid-cols-3 gap-5'>

                        {
                            activeProducts.map( product => <Product key={product.product_id} product={product} ></Product>)
                        }


                    </div>

                </div>

            </section>
        </div>
    );
};

export default Products;