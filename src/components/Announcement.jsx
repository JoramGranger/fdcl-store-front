import React from 'react'
import styled from 'styled-components';

/* styled components */

const Container = styled.div`
    height: 30px;
    background-color: #f6f6f6;
    color: #040404;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;


/* styled components */

const Announcement = () => {
  return (
    <Container>
        super deal
    </Container>
  )
}

export default Announcement