import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

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

const MyAccount = () => {
  return (
    <Container>
        <Navbar />
            <Announcement />
            <Wrapper>
                    <Title>MY ACCOUNT</Title>
            </Wrapper>
            <Newsletter />
        <Footer />
    </Container>
  )
}

export default MyAccount