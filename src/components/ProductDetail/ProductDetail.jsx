import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const ProductDetail = () => {

    const allProducts = useLoaderData();
    const { product_id } = useParams();
    console.log('ProductDetails OK: ', allProducts);
    console.log('Id:', product_id);
    const product = allProducts.find(p => p.product_id == product_id);
    console.log('Product', product);
    const { product_title, product_image, price, description, Specification, availability, rating } = product;

    const p_spec = { Specification };

    const specifications = p_spec.Specification;

    






    return (
        <div className='w-7/12 mx-auto grid grid-cols-12 gap-5 items-center'>
            <div className='col-span-5'>

                <img className='h-[400px]' src={product_image} alt={product_title} />

            </div>

            <div className='col-span-7'>
                <h2>{product_title}</h2>
                <h3>Price: ${price}</h3>

                <button className='btn'> {availability ? 'In Store' : 'Out of Stack'}  </button>

                <p>{description}</p>
                <h3 className='font-bold'>Specification:</h3>


                <ol className="list-decimal pl-5">
                    {
                        specifications.map((s, idx) => <li key={idx} className="">{s}</li>)
                    }
                </ol>
                <h3>Rating ⬛</h3>

                

                {/* <ReactStars
                    count={5}
                    
                    size={24}
                    activeColor="#ffd700"
                /> */}

                <div className='flex items-center gap-3'>

               
                <ReactStars count={5}
                    
                    size={24}
                    activeColor="#ffd700" 
                    value={rating}
                    >   </ReactStars>
                {rating}

                </div>

       
              
            </div>
        </div>
    );
};

export default ProductDetail;