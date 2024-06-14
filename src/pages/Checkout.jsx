import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove, CreditCard, LocalShipping, MobileFriendly } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField } from '@mui/material';

import AirtelLogo from '../assets/airtel-logo.png';
import MTNLogo from '../assets/New-mtn-logo.jpg';
import MasterCardLogo from '../assets/master-card.png';
import VisaLogo from '../assets/visa1.png';

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

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 0px 80px;
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
    font-weight: ${(props) => (props.type === 'total' ? '500' : '400')};
    font-size: ${(props) => (props.type === 'total' ? '20px' : '16px')};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Payment = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PaymentTitle = styled.h1`
    font-weight: 200px;
`;

const PaymentOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const PaymentOption = styled.div`
    display: flex;
    align-items: center;
`;

const PaymentIcon = styled.div`
    margin-left: 10px;
`;

const PaymentDetails = styled.div`
    display: flex;
    align-items: center;
`;

const PaymentImage = styled.img`
    width: 40px;
    height: auto;
`;

const PaymentDetailsContainer = styled.div`
    margin-top: 20px;
`;

const CardDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
`;

const CardInput = styled(TextField)`
    width: calc(50% - 10px); // Adjusting for gap between inputs
`;

const PhoneInputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

const CountryCode = styled.span`
    margin-right: 10px;
    font-weight: 600;
`;

const PaymentButtonContainer = styled.div`
    margin-top: 20px;
`;

const PaymentButton = styled.a`
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
                <Bottom>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>UGX 60000</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>UGX 7500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>UGX -2500</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>UGX 65000</SummaryItemPrice>
                        </SummaryItem>
                    </Summary>
                    <Payment>
                        <PaymentTitle>PAYMENT</PaymentTitle>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Choose your payment method</FormLabel>
                            <PaymentOptionsContainer>
                                <RadioGroup row value={selectedOption} onChange={handleChange}>
                                    <FormControlLabel
                                        value="cash"
                                        control={<Radio />}
                                        label={
                                            <PaymentDetails>
                                                Cash
                                                <PaymentIcon>
                                                    <LocalShipping />
                                                </PaymentIcon>
                                            </PaymentDetails>
                                        }
                                    />
                                    <FormControlLabel
                                        value="mastercard"
                                        control={<Radio />}
                                        label={
                                            <PaymentDetails>
                                                <PaymentImage src={MasterCardLogo} alt="MasterCard" />
                                                <PaymentIcon>
                                                    <CreditCard />
                                                </PaymentIcon>
                                            </PaymentDetails>
                                        }
                                    />
                                    <FormControlLabel
                                        value="visa"
                                        control={<Radio />}
                                        label={
                                            <PaymentDetails>
                                                <PaymentImage src={VisaLogo} alt="Visa" />
                                                <PaymentIcon>
                                                    <CreditCard />
                                                </PaymentIcon>
                                            </PaymentDetails>
                                        }
                                    />
                                    <FormControlLabel
                                        value="airtel"
                                        control={<Radio />}
                                        label={
                                            <PaymentDetails>
                                                <PaymentImage src={AirtelLogo} alt="Airtel" />
                                                <PaymentIcon>
                                                    <MobileFriendly />
                                                </PaymentIcon>
                                            </PaymentDetails>
                                        }
                                    />
                                    <FormControlLabel
                                        value="mtn"
                                        control={<Radio />}
                                        label={
                                            <PaymentDetails>
                                                <PaymentImage src={MTNLogo} alt="MTN" />
                                                <PaymentIcon>
                                                    <MobileFriendly />
                                                </PaymentIcon>
                                            </PaymentDetails>
                                        }
                                    />
                                </RadioGroup>
                            </PaymentOptionsContainer>
                        </FormControl>

                        <PaymentDetailsContainer>
                            {selectedOption === 'visa' || selectedOption === 'mastercard' ? (
                                <CardDetails>
                                    <CardInput
                                        label="Card Number"
                                        variant="outlined"
                                    />
                                    <CardInput
                                        label="Card Holder Name"
                                        variant="outlined"
                                    />
                                    <CardInput
                                        label="Expiry Date"
                                        variant="outlined"
                                    />
                                    <CardInput
                                        label="CVV"
                                        variant="outlined"
                                    />
                                </CardDetails>
                            ) : null}

                            {selectedOption === 'airtel' || selectedOption === 'mtn' ? (
                                <PhoneInputContainer>
                                    <CountryCode>+256</CountryCode>
                                    <TextField
                                        label="Phone Number"
                                        variant="outlined"
                                        placeholder="0700 000 000"
                                        fullWidth
                                    />
                                </PhoneInputContainer>
                            ) : null}

                            <PaymentButtonContainer>
                                <Link to="/my" style={{ textDecoration: 'none' }}>
                                    <PaymentButton>PLACE ORDER</PaymentButton>
                                </Link>
                            </PaymentButtonContainer>
                        </PaymentDetailsContainer>
                    </Payment>
                </Bottom>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default Checkout;
