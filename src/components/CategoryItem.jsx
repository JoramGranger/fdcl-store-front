import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column; /* Ensure items stack vertically */
    align-items: center;
    justify-content: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.75);
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #ffe5e5;
    color: #040404;
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 15px -11px #000000; 
    box-shadow: 5px 5px 10px -11px #000000;
    &:hover {
        background-color: #040404;
        color: #ffe5e5;
        transition: 1s all ease;    
    }
`;

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>        
    </Container>
  )
}

export default CategoryItem