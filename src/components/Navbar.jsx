import React from 'react'
import styled from 'styled-components'
/* import SearchIcon from '@mui/icons-material/Search'; */
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';


/* styled components */

const Container = styled.div`
    margin: -10px;
    background-color: lightpink;
    padding: 0;
`;

const Wrapper = styled.div`
    padding: 10px, 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightpink;
`;

// left
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px
`;

const Input = styled.input`
    border: none;
`;

// center
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-weight: bold;
`;

// right
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px; 
`;

/* styled components */

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>En</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{color:'grey',  fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>FORTUNE DERMA</Logo></Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge>                    
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar