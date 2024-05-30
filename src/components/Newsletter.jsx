import React from 'react'
import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
    height: 60vh;
    background-color: #040404;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: #ffe5e5;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #ffe5e5;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    /* background-color: #ffe5e5; */
    display: flex;
    justify-content: space-between;
    border: 1px solid #ffe5e5;
    border-radius: 5px;
`;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    border-radius: 5px 0 0 5px;        
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: lightpink;
    border-radius: 0 5px 5px 0;   
`;


const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter