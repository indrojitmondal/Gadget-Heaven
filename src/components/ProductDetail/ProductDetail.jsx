import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

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
        <div>
            <img src={product_image} alt={product_title} />
            <div>
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
            </div>
        </div>
    );
};

export default ProductDetail;