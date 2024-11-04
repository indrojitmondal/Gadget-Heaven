import React from 'react';

const Product = ({product}) => {
    const {product_image,product_title, price} = product;
    return (
        <div>
             <img src={product_image} alt={product_title} />
             <h2>Name: {product_title} </h2>
             <h3>Price: {price} </h3>
             
             <button className='btn'>View Details</button>

        </div>
    );
};

export default Product;