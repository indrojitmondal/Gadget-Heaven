import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { WishContext, cartContext } from '../Root/Root';
import { useLoaderData } from 'react-router-dom';

const Dashboard = () => {

    const { cart, setCart } = useContext(cartContext);
    
    const { wish, setWish } = useContext(WishContext);
    const [cardActive, setCardActive]= useState(true);
    const [wishActive, setWishActive]= useState(false);
    const handleIsCart = status => {
    if (status) {
     
      setCardActive(true);
      setWishActive(false);
    }
    // console.log(status);
  }
  const handleIsWish = status => {
    if (status) {

      
        setWishActive(true);
        setCardActive(false);
   
    }
    // console.log(status);
  }

//   const allProducts= useLoaderData();
  const allProducts = useLoaderData() || [];
console.log('Type',typeof allProducts);
console.log(Array.isArray(allProducts));

//   const product = allProducts.find(p => p.product_id == 1);
//  console.log('Product',product);
   const cartProduct=[];
//    const [cartProduct, setCartProduct]= useState([]);

    
        for (const id of cart) {
         //   const p= allProducts.find(product=> product.product_id == id);
         //   console.log('Product',p);
         const product = allProducts?.find(p => parseInt(p.product_id) === parseInt(id));
          
          if(product){
             cartProduct.push(product);
            // const newCartP= [...cartProduct]
            //  setCartProduct([...cartProduct,product]);
     
          }
        
    }


  

   console.log('CartProductOk:',cartProduct.length);

   




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
                    <button 
                      onClick={()=>{
                        // setCardActive(false);
                        // setWishActive(true);
                        handleIsCart(true);
                        // alert(cart.length);
                        
                      }}
                     className={`border ${cardActive? 'bg-white text-primary':'bg-primary text-white'} border-white px-10 rounded-[32px] py-1 text-lg`}>Cart</button>

                    <button 
                    onClick={()=>{
                        // setWishActive(true);
                        // setCardActive(false);
                        handleIsWish(true);
                        
                      }}
                      className={`border ${wishActive? 'bg-white text-primary':'bg-primary text-white'} border-white px-10 rounded-[32px] py-1 text-lg`}>Wishlist</button>
                </div>

            </div>
            <div>
                {
                    cardActive && 
                    <>
                    <div className='px-10 pt-3 flex items-center justify-between'> 
                         <h2 className='font-bold text-xl'>Cart: {cartProduct.length}</h2>
                         <div className='flex items-center gap-5'>
                            <h1 className='font-bold text-lg'>Total cost: 999.99</h1>
                            <button className='btn'>Short by Price</button>
                            <button className='btn'>Purchase</button>
                         </div>
                    </div>
                     <div>
                           
                     </div>
                    </>
                }
                  
            </div>

            <div>
                {
                    wishActive && 
                    <div className='px-10 pt-3 flex items-center justify-between'> 
                         <h2 className='font-bold text-xl'>WishList</h2>
                         {/* <div className='flex items-center gap-5'>
                            <h1 className='font-bold text-lg'>Total cost: 999.99</h1>
                            <button className='btn'>Short by Price</button>
                            <button className='btn'>Purchase</button>
                         </div> */}
                    </div>
                }
                  
            </div>

        </div>
    );
};

export default Dashboard;