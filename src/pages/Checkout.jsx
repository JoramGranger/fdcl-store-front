import React, { useState} from 'react'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove, CreditCard, LocalShipping, MobileFriendly } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

import AirtelLogo from '../assets/airtel-logo.png'
import MTNLogo from '../assets/New-mtn-logo.jpg'
import MasterCardLogo from '../assets/master-card.png'
import VisaLogo from '../assets/visa1.png'

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
    gap: 40px;
    padding: 0px 80px;
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

const Payment = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const PaymentTitle = styled.h1`
    font-weight: 200px;
`;

const PaymentItem = styled.div`
    margin: 10px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "20px"};
`;
const PaymentItemText = styled.span``;
const PaymentItemPrice = styled.span``;

const PaymentButton = styled.button`
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

const PaymentOption = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

const PaymentIcon = styled.div`
    margin-right: 10px;
`;

const PaymentDetails = styled.div`
    display: flex;
    align-items: center;
`;

const PaymentImage = styled.img`
    width: 40px;
    height: auto;
    margin-right: 10px;
`;




const Checkout = () => {
    
    const [selectedOption, setSelectedOption] = useState('cash');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>CHECK OUT</Title>
            {/* <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Cart(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top> */}
            <Bottom>
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
                    
                </Summary>
                <Payment>
                    <PaymentTitle>PAYMENT</PaymentTitle>
                    <FormControl component="fieldset">
                <FormLabel component="legend">Choose your payment method</FormLabel>
                <RadioGroup value={selectedOption} onChange={handleChange}>
                <PaymentOption>
                        <FormControlLabel
                            value="cash"
                            control={<Radio />}
                            label={
                                <PaymentDetails>
                                    Cash on Delivery
                                </PaymentDetails>
                            }
                        />
                        <PaymentIcon>
                            <LocalShipping />
                        </PaymentIcon>
                    </PaymentOption>
                    <PaymentOption>
                        <FormControlLabel
                            value="visa"
                            control={<Radio />}
                            label={
                                <PaymentDetails>
                                    <PaymentImage src={MasterCardLogo} alt="Visa" />
                                    
                                </PaymentDetails>
                            }
                        />
                        <PaymentIcon>
                            <CreditCard />
                        </PaymentIcon>
                    </PaymentOption>
                    <PaymentOption>
                        <FormControlLabel
                            value="visa"
                            control={<Radio />}
                            label={
                                <PaymentDetails>
                                    <PaymentImage src={VisaLogo} alt="Visa" />
                                    
                                </PaymentDetails>
                            }
                        />
                        <PaymentIcon>
                            <CreditCard />
                        </PaymentIcon>
                    </PaymentOption>
                    <PaymentOption>
                        <FormControlLabel
                            value="airtel"
                            control={<Radio />}
                            label={
                                <PaymentDetails>
                                    <PaymentImage src={AirtelLogo} alt="Airtel" />
                                    
                                </PaymentDetails>
                            }
                        />
                        <PaymentIcon>
                            <MobileFriendly />
                        </PaymentIcon>
                    </PaymentOption>
                    <PaymentOption>
                        <FormControlLabel
                            value="mtn"
                            control={<Radio />}
                            label={
                                <PaymentDetails>
                                    <PaymentImage src={MTNLogo} alt="MTN" />
                                    
                                </PaymentDetails>
                            }
                        />
                        <PaymentIcon>
                            <MobileFriendly />
                        </PaymentIcon>
                    </PaymentOption>
                </RadioGroup>
            </FormControl>
                    
                    <Link  to="/checkout" style={{textDecoration: 'none'}}><PaymentButton>PLACE ORDER</PaymentButton></Link>
                </Payment>

            </Bottom>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Checkout