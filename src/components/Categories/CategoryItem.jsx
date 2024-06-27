import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin-bottom: 30px;
    margin-top: 30px;
`;

const SubCategoryList = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px; /* Space between items */
    flex-wrap: wrap; /* Wrap items if they overflow */
    margin-top: 20px; /* Space between title and subcategories */
`;

const SubCategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
    border: 2px solid #ffa9a9;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease; /* Smooth transition for the zoom effect */

    &:hover {
        transform: scale(1.5); /* Zoom in on hover */
    }
`;

const CategoryName = styled.p`
    font-size: 16px;
    font-weight: 300;
    text-align: center; /* Center align text */
    /* width: 100px; /* Ensure text does not overflow */ */
`;

const Title = styled.h1`
    font-weight: 400;
    align-self: center;
    justify-content: center;
`;

// Category component
const CategoryItem = ({ categoryObject }) => {

    return (
        <CategoryContainer>
            <Title>Shop By {categoryObject.category}</Title>
            <SubCategoryList>
            {
                categoryObject.subCategories.map((subCategoryObject) => (
                    <SubCategoryItem key={subCategoryObject.id}>
                    <Circle>
                        <Image src={subCategoryObject.img} alt={subCategoryObject.childCategory} />
                    </Circle>
                    <CategoryName>{subCategoryObject.childCategory}</CategoryName>
                    </SubCategoryItem>
                ))
            }
            </SubCategoryList>
        </CategoryContainer>
    );
};

export default CategoryItem;
