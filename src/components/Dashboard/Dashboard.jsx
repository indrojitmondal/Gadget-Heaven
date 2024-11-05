import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { WishContext, cartContext } from '../Root/Root';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReactDOM from 'react-dom';

import modalImage from '../../assets/Group.png'
import Modal from '../Modal/Modal';
import WishList from '../WishList/WishList';


const Dashboard = () => {


    const { cart, setCart } = useContext(cartContext);

    const { wish, setWish } = useContext(WishContext);
    const [cardActive, setCardActive] = useState(true);
    const [wishActive, setWishActive] = useState(false);
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
    console.log('Type', typeof allProducts);
    console.log(Array.isArray(allProducts));

    const [cartProduct, setCartProduct]= useState([]);



     useEffect(() => {
        const newCartProducts = [];
        for (const id of cart) {
            const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
            if (product) {
                newCartProducts.push(product);
            }
        }
        setCartProduct(newCartProducts); // Update all at once after the loop
    }, [cart, allProducts]);

    // for wishList 

    const [wishProduct, setWishProduct]= useState([]);



    useEffect(() => {
       const newWishProducts = [];
       for (const id of wish) {
           const product = allProducts.find(p => parseInt(p.product_id) === parseInt(id));
           if (product) {
               newWishProducts.push(product);
           }
       }
       setWishProduct(newWishProducts); // Update all at once after the loop
   }, [wish, allProducts]);





    console.log('CartProductOk:', cartProduct.length);
    const [totalCost, setTotalCost]= useState(0);

   useEffect(()=>{
       console.log('Cost-length',cartProduct.length);
       let cost=0;
       const sum= cartProduct.reduce( (p,c)=>p+c.price,0);
       console.log('Total Cost:',sum);
       setTotalCost(sum);
   },[cartProduct]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    
    
    const openModal = () => setIsModalOpen(true);
    const navigate = useNavigate();
    
    const closeModal = () =>{

        setIsModalOpen(false);
        setTotalCost(0);
        setCartProduct([]);
        setCart([]);
        navigate('/');

    } 


    const handleAddToCart = (x)=>{

        console.log("Hello from add to cart",x);
        setCart([...cart,x]);
        console.log(cart.length);
        // setCart((prev) => [...prev, product_id])
    }


   



    return (
        <div>

            <Helmet>
                {/* <title>Gadget | Dashboard</title> */}
                {/* <meta name="description" content="Description of this page" /> */}
                {/* <link rel="icon" type="image/x-icon" href="/path/to/your/favicon.ico" /> */}
                <link rel="shortcut icon" href="https://i.ibb.co.com/hVqQxsG/favicon-16x16.png" type="image/x-icon" />

            </Helmet>
            <div className='bg-primary py-5 text-white'>





                <h1 className='text-center text-2xl font-bold'>Dashboard</h1>

                <p className='text-center'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <div className='pt-3 flex justify-center items-center gap-4'>
                    <button
                        onClick={() => {
                            // setCardActive(false);
                            // setWishActive(true);
                            handleIsCart(true);
                            // alert(cart.length);

                        }}
                        className={`border ${cardActive ? 'bg-white text-primary' : 'bg-primary text-white'} border-white px-10 rounded-[32px] py-1 text-lg`}>Cart</button>

                    <button
                        onClick={() => {
                            // setWishActive(true);
                            // setCardActive(false);
                            handleIsWish(true);

                        }}
                        className={`border ${wishActive ? 'bg-white text-primary' : 'bg-primary text-white'} border-white px-10 rounded-[32px] py-1 text-lg`}>Wishlist</button>
                </div>

            </div>
            <div>
                {
                    cardActive &&
                    <>
                        <div className='px-10 pt-3 flex items-center justify-between'>
                            {/* <p>Cart: {cartProduct.length}</p> */}
                            <h2 className='font-bold text-xl'>Cart</h2>
                            <div className='flex items-center gap-5'>
                                <h1 className='font-bold text-lg'>Total cost: {totalCost}</h1>
                                <button className='btn'>Short by Price</button>
                                <button onClick={openModal} className='btn'>Purchase</button>
                            </div>
                        </div>
                        <div>
                            {
                                cartProduct.map(product => <Cart key={product.product_id} product={product} ></Cart>)
                            }

                        </div>
                    </>
                }

            </div>

            <div>
                {
                    wishActive &&
                    <>
                    <div className='px-10 pt-3 flex items-center justify-between'>
                        <h2 className='font-bold text-xl'>WishList</h2>
                        {/* <div className='flex items-center gap-5'>
                            <h1 className='font-bold text-lg'>Total cost: 999.99</h1>
                            <button className='btn'>Short by Price</button>
                            <button className='btn'>Purchase</button>
                         </div> */}
                    </div>

                    <div>
                            {
                                wishProduct.map(product => <WishList key={product.product_id} handleAddToCart={handleAddToCart} product={product} ></WishList>)
                            }

                        </div>


                    </>
                }

            </div>






            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <img className='mx-auto' src={modalImage} alt="" />
                <h2 className='text-xl font-bold text-center'>Payment Successfully</h2>
                 
                <p className='text-center'>Thanks for purchasing</p>
                 
                <p className='text-center'>Total: {totalCost}</p>
               
         
                <button className='mt-3 border w-full rounded-[32px] px-4 py-2 border-gray-200 bg-gray-200 text-center font-bold'  onClick={closeModal}>Close</button>
                
               
            </Modal>



        </div>
    );
};

export default Dashboard;