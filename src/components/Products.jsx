import React from 'react'
import styled from 'styled-components';
import ProductItem from './ProductItem';
import { popularProducts } from '../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) =>(
            <ProductItem item={item} key={item.id} />
        ))}        
    </Container>
  )
}

export default Products;