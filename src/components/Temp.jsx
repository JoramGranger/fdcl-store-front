import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; /* Ensure items stack vertically */
    align-items: center; /* Center align items horizontally */
`;

const Title = styled.h1`
    text-align: center;
    margin-bottom: 20px; /* Add margin below title for spacing */
`;

const ProductsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%; /* Ensure products span full width */
`;

const Products = () => {
  return (
    <Container>
        <Title>SKIN CARE</Title>
        <ProductsList>
            {popularProducts.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </ProductsList>
    </Container>
  );
}

export default Products;
