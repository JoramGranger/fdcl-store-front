import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { sliderItems } from '../data';

// Keyframes for the zoom effect
const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    ${props => props.direction === "left" ? 'left: 20px;' : 'right: 20px;'}
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    overflow: hidden;
`;

const Image = styled.img`
    height: 80%;
    animation: ${zoomInOut} 10s infinite;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 70px;    
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const SlideIndicators = styled.div`
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100px; /* Adjust the height to extend upwards */
    gap: 10px; /* Add space between indicators */
`;

const Indicator = styled.div`
    width: 10px;
    height: 10px;
    background-color: ${props => props.active ? '#333' : '#ccc'};
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
        } else {
            setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev => (prev < sliderItems.length - 1 ? prev + 1 : 0));
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.description}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
            <SlideIndicators>
                {sliderItems.map((item, index) => (
                    <Indicator 
                        key={index} 
                        active={index === slideIndex} 
                        onClick={() => setSlideIndex(index)} 
                    />
                ))}
            </SlideIndicators>
        </Container>
    );
};

export default Slider;
