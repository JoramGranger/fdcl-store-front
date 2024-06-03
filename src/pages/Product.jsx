import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
/* #FACCE2 */

const Container = styled.div`
 /* background-color: #ffe5e5; */
 background-color: #FACCE2;
`;

const Wrapper =  styled.div`
    padding: 50px;
    display: flex;
`;

const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=>props.color};
    margin: 0px 5px;
    cursor: pointer;

`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px;
`;

const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid lightpink;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
    display: flex;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid lightpink;
    background-color: transparent;
    border-radius: 5px;
    color: #040404;
    font-weight: 600;
    cursor: pointer;
    
    &:hover {
        background-color: lightpink;
    }
`;




const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>HydrateGlow Skin Moisturizer</Title>
                <Description>
                    HydrateGlow Skin Moisturizer is a luxurious, 
                    all-natural moisturizer designed to nourish, 
                    hydrate, and rejuvenate your skin. 
                    Formulated with a blend of high-quality ingredients, 
                    HydrateGlow is suitable for all skin types and 
                    provides long-lasting moisture and a radiant glow.
                </Description>
                <Price>UGX 65000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="grey"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product