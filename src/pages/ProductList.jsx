import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div`
    
`;
const Title = styled.h1`
    margin: 20px;
`;
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
    padding: 10px;
`;


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Skin Care</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Choose Category</Option>
                    <Option>By Category</Option>
                    <Option>Skin Type</Option>
                    <Option>Skin Concern</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select>
                    <Option disabled selected>Sort Category</Option>
                    <Option>Face</Option>
                    <Option>Body</Option>
                    <Option>Hair</Option>
                    <Option>Hands & Feet</Option>
                    <Option>Dryness</Option>
                    <Option>Aging</Option>
                    <Option>Acne</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList