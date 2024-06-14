import React from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Container = styled.div`
    background-color: #ffe9e9;
`;

const Wrapper = styled.div`
    padding: 20px;
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=>props.type === "filled" && "none"};
    background-color: ${(props)=>props.type === "filled" ? "lightpink" : "transparent"};
    color: ${(props)=>props.type === "filled" && "black"};
    border-radius: 5px;
`;
const TopTexts = styled.div`

`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;
const Image = styled.img`
    /* width: 150px; */
    height: 20vh;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction:  column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size: 3px;
    font-weight: 200;
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    width: 80%;

`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200px;
`;

const SummaryItem = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "20px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: lightpink;
    color: #040404;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    &:hover {
        border: 2px solid lightpink;
        background-color: transparent;
        transition: 0.5s ease;
    }
`;


const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR CART</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg"/>
                            <Details>
                                <ProductName><b>Product:</b> Skin Moisturizer</ProductName>
                                <ProductId><b>ID:</b> Skin Moisturizer</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>UGX 30000</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/14780455/pexels-photo-14780455.jpeg"/>
                            <Details>
                                <ProductName><b>Product:</b> Skin Moisturizer</ProductName>
                                <ProductId><b>ID:</b> Skin Moisturizer</ProductId>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>L</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <Add />
                                <ProductAmount>2</ProductAmount>
                                <Remove />
                            </ProductAmountContainer>
                            <ProductPrice>UGX 30000</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>UGX 60000</SummaryItemPrice>
                    </SummaryItem>
                    <Hr />
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>UGX 7500</SummaryItemPrice>
                    </SummaryItem>
                    <Hr />
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>UGX -2500</SummaryItemPrice>
                    </SummaryItem>
                    <Hr />
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>UGX 65000</SummaryItemPrice>
                    </SummaryItem>
                    <Hr />
                    <Link  to="/checkout" style={{textDecoration: 'none'}}><SummaryButton>CHECKOUT NOW</SummaryButton></Link>
                </Summary>
            </Bottom>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Cart