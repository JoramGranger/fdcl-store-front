import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo-black.png'
import appLogoCompressed from '../assets/app-logo-compressed-black.png'
import dermaBG from '../assets/dermaco.jpg';

/* #FDE2F3 */

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    /* background-color: white; */
    background-color: white;
    background-image: url(${dermaBG});
    background-size: cover; 
    background-position: left;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;    
    padding: 20px;
    background-color: #FDE2F3;
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
    background-color: black;
    color: lightpink;
    cursor: pointer;
    border-radius: 5px;
`;

const FormLink = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    color: #040404;
`;


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Logo src={appLogoCompressed}/>
            <Title>LOGIN</Title>
            <Form>
                <Input placeholder="Email" />
                <Input placeholder="password" />
                <Button>LOGIN</Button>
                <Link to="/auth/passwordRecovery"><FormLink>DO NOT REMEMBER YOUR PASSWORD</FormLink></Link>
                <Link to="/auth/register"><FormLink>CREATE A NEW ACCOUNT</FormLink></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login