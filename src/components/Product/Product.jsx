import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';

const Product = ({product}) => {
    const {product_id,product_image,product_title, price} = product;
    return (
        <div>
             <img src={product_image} alt={product_title} />
             <h2  className='font-bold'> {product_title} </h2>
             <h3>Price: {price} </h3>
             
 
              <Link to={`/product/${product_id}`}>
                <button className='btn'>View Details</button>
              </Link>
             
             

        </div>
    );
};

export default Product;