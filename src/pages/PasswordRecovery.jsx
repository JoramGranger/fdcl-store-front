import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo-black.png'
import appLogoCompressed from '../assets/app-logo-compressed-black.png'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fff9f9;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;    
    padding: 20px;
    background-color: white;
    -webkit-box-shadow: 5px 5px 15px -11px #000000; 
    box-shadow: 5px 5px 10px -11px #000000;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center align items */
`;

const Logo = styled.img`
    height: 40px;
    margin: 10px;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin-top: 30px;
`;
const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%; /* Ensure the form takes full width */
    align-items: center; /* Center align form items *
`;

const Input = styled.input`
    flex: 1;
    /* min-width: 40%; */
    width: 80%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid lightpink;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: lightpink;
    color: #040404;
    cursor: pointer;
    border-radius: 5px;
`;

const FormLink = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;


const PasswordRecovery = () => {
  return (
    <Container>
        <Wrapper>
            <Logo src={appLogoCompressed}/>
            <Title>PASSWORD RECOVERY</Title>
            <SubTitle>Enter your account's email address</SubTitle>
            <Form>
                <Input placeholder="Email" />
                <Button>NEXT</Button>
                <Link to="/auth/login"><FormLink>BACK TO SIGN IN</FormLink></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default PasswordRecovery