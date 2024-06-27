import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import queryString from 'query-string';

const Container = styled.div``;

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

const CategoryList = ({/* products */}) => {
    const location = useLocation();
    const { subcategoryId } = queryString.parse(location.search);

    // Convert subcategoryId to integer
    const subcategoryIdInt = parseInt(subcategoryId);

    // Fetch or filter products based on the subcategoryId parameter
    /* const filteredProducts = products.filter(product => product.subcategoryId === parseInt(subcategoryId)); */
    return (
        <Container>
            <Navbar />
            <Announcement />
           
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select defaultValue="">
                        <Option value="" disabled>Choose Category</Option>
                        <Option>By Category</Option>
                        <Option>Skin Type</Option>
                        <Option>Skin Concern</Option>
                    </Select>
                    <Select defaultValue="">
                        <Option value="" disabled>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                    <Select defaultValue="">
                        <Option value="" disabled>Sort Category</Option>
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
            <Title>{subcategoryIdInt} shop</Title>
            {/* <Products category={category} /> */}
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default CategoryList;
