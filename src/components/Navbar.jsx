import React from 'react'
import styled from 'styled-components'
/* import SearchIcon from '@mui/icons-material/Search'; */
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';


/* styled components */

const Container = styled.div`
    background-color: lightpink;
    padding: 10px;
    ${mobile({})}
`;

const Wrapper = styled.div`
    padding: 20px, 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: lightpink;
    ${mobile({})}
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
    ${mobile({display: "none"})}
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
                    <Input placeholder="Search.."/>
                    <Search style={{color:'grey',  fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>FORTUNE DERMA</Logo></Center>
            <Right>
                <Link to="/auth/register" style={{textDecoration: 'none'}}>
                    <MenuItem>Register</MenuItem>
                </Link>
                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                    <MenuItem>Sign In</MenuItem>
                </Link>
                <Link to="/shop/cart" style={{textDecoration: 'none'}}>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>                    
                    </MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar