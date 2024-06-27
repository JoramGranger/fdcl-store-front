import React from 'react';
import styled from 'styled-components';
/* import Product from './Product';
import { popularProducts } from '../data'; */
import CategoryItem from './CategoryItem';
import { ProductCategories } from '../../data';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column; /* Ensure items stack vertically */
    align-items: center; /* Center align items horizontally */
`;

const CategoryList = () => {
  return (
    <Container>
        {
          ProductCategories.map((categoryObject) => (
            <CategoryItem key={categoryObject.category} categoryObject={categoryObject} />
          ))
        }       
    </Container>
  );
}

export default CategoryList;
