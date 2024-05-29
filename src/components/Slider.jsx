import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    background-color: grey;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
`;

const Description = styled.p``;
const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />            
        </Arrow> 
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="https://clabane.com/cdn/shop/files/KOJIC-Cleansing-bar-in-Stock-wide_ff799f0e-8a83-44e4-94a4-20e57ffb785d.webp"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>ANNIVERSARY SALE</Title>
                    <Description>TAKE GOOD CARE OF THAT SKIN! GET FLAT 50% OFF FOR NEW ARRIVALS.</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />            
        </Arrow>        
    </Container>
  )
}

export default Slider