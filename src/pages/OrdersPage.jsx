import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import LeftNavigation from '../components/LeftNavigationMyAccount';
import Orders from '../components/Orders';

const Container = styled.div`
    background-color: #ffe9e9;
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
    padding: 20px;
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Right = styled.div`
    
`;

const OrdersPage = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>MY ACCOUNT</Title>
            <Wrapper>
                <LeftNavigation />
                <Right>
                    <Orders />
                </Right>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default OrdersPage;
