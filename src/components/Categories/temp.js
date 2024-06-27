/* import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Shop = ({ products }) => {
    const location = useLocation();
    const { subcategoryId } = queryString.parse(location.search);

    // Fetch or filter products based on the subcategoryId parameter
    const filteredProducts = products.filter(product => product.subcategoryId === parseInt(subcategoryId));

    return (
        <div>
            <h1>Shop</h1>
            <div>
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop; */

import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

const Shop = ({ products }) => {
    const location = useLocation();
    const { subcategoryId } = queryString.parse(location.search);

    // Convert subcategoryId to integer
    const subcategoryIdInt = parseInt(subcategoryId);

    // Filter products based on the subcategoryId parameter
    const filteredProducts = products.filter(product => product.subcategoryId === subcategoryIdInt);

    return (
        <div>
            <h1>Shop</h1>
            <div>
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <img src={product.img} alt={product.name} />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;

