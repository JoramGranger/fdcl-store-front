import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Tile from './Tile';
import { NewProducts } from '../../data';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Container = styled.div`
  padding: 20px 100px;
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const ListNavigator = styled.div`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: -50px;
`;

const ButtonContainer = styled.span`
  background-color: #040404;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const ProductsList = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;

const ScrollContainer = styled.div`
  display: flex;
  animation: scroll 30s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;

const HorizontalList = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('animationiteration', () => {
      scrollContainer.style.animation = 'none';
      void scrollContainer.offsetHeight; // trigger reflow
      scrollContainer.style.animation = null;
    });
  }, []);

  const scrollLeft = () => {
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft -= 300;
  };

  const scrollRight = () => {
    const scrollContainer = scrollRef.current;
    scrollContainer.scrollLeft += 300;
  };

  return (
    <Container>
      <Title>NEW PRODUCTS</Title>
      <ProductsList>
        <ScrollContainer ref={scrollRef}>
          {NewProducts.concat(NewProducts).map((item, index) => (
            <Tile item={item} key={index} />
          ))}
        </ScrollContainer>
      </ProductsList>
      <ListNavigator>
        <ButtonContainer onClick={scrollLeft}><ArrowBackIcon style={{ color: '#ffefef' }} /></ButtonContainer>
        <ButtonContainer onClick={scrollRight}><ArrowForwardIcon style={{ color: '#ffefef' }} /></ButtonContainer>
      </ListNavigator>
    </Container>
  );
}

export default HorizontalList;
