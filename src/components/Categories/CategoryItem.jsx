import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const Circle = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CategoryName = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const Title = styled.h1`
    font-weight: bold;
    align-self: center;
    justify-content: center;
`;

// Category component
const CategoryItem = ({ categoryObject }) => {

    return (
        <CategoryContainer key={categoryObject.category}>
            <Title>{categoryObject.category}</Title>
            {
                categoryObject.subCategories.map((subCategoryObject) => (
                    <>
                    <Circle>
                        <Image src={subCategoryObject.imageUrl} alt={subCategoryObject.childCategory} />
                    </Circle>
                    <CategoryName>{subCategoryObject.childCategory}</CategoryName>
                    </>
                ))
            }
        </CategoryContainer>
    );
};

export default CategoryItem;
