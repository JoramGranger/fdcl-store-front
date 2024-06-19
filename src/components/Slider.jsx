import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { sliderItems } from '../data';

// Keyframes for the zoom effect
const zoomInOut = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fde2f3;
  border-radius: 50%;
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
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1.5s ease;
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
  align-items: center;
  justify-content: center;
`;

const Indicator = styled.div`
  width: 50px;
  height: 10px;
  background-color: ${props => props.active ? '#040404' : '#ffffff'};
  margin: 0 5px;
  border-radius: 10%;
  cursor: pointer;
  -webkit-box-shadow: 5px 5px 15px -11px #000000; 
  box-shadow: 5px 5px 10px -11px #000000;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1); // Start from the first "real" slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const wrapperRef = useRef();

  const handleClick = (direction) => {
    if (isTransitioning) return; // Prevent multiple clicks during transition

    setIsTransitioning(true);
    if (direction === "left") {
      setSlideIndex(prev => prev === 0 ? sliderItems.length : prev - 1);
    } else {
      setSlideIndex(prev => prev === sliderItems.length + 1 ? 1 : prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick("right");
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (slideIndex === 0 || slideIndex === sliderItems.length + 1) {
      const timeout = setTimeout(() => {
        wrapperRef.current.style.transition = 'none';
        setSlideIndex(slideIndex === 0 ? sliderItems.length : 1);
        setTimeout(() => {
          wrapperRef.current.style.transition = 'transform 1.5s ease';
          setIsTransitioning(false);
        }, 20); // Re-enable transition after a short delay
      }, 1500); // Match the duration of the transition
      return () => clearTimeout(timeout);
    }
    setIsTransitioning(false);
  }, [slideIndex]);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex} ref={wrapperRef}>
        {sliderItems.map((item, index) => (
          <Slide bg={item.bg} key={`start-${index}`}>
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
        {sliderItems.map((item, index) => (
          <Slide bg={item.bg} key={`end-${index}`}>
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
            active={index + 1 === slideIndex || (slideIndex === 0 && index === sliderItems.length - 1) || (slideIndex === sliderItems.length + 1 && index === 0)} 
            onClick={() => setSlideIndex(index + 1)}
          />
        ))}
      </SlideIndicators>
    </Container>
  );
};

export default Slider;
