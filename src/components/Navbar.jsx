import React from 'react'
import styled from 'styled-components'
/* import SearchIcon from '@mui/icons-material/Search'; */
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo-black.png'
import appLogoCompressed from '../assets/app-logo-compressed-black.png'


/* styled components */

const Container = styled.div`
    background-color: lightpink;
    padding: 10px;
     position: sticky;
    top: 0;
    z-index: 1000;
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
    border: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    background-color: #FFE8E8;
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    &:focus {
    outline: none;
    }
`;

// center
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.img`
    height: 40px;
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
    color: #040404;
    font-weight: 500;
`;

/* styled components */

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language></Language>
                <SearchContainer>
                    <Input placeholder="Search.."/>
                    <Search style={{color:'black',  fontSize:16}}/>
                </SearchContainer>
            </Left>
            <Center><Logo src={appLogoCompressed} alt="fortune derma logo"/></Center>
            <Right>
                <Link to="/auth/register" style={{textDecoration: 'none'}}>
                    <MenuItem>Register</MenuItem>
                </Link>
                <Link to="/auth/login" style={{textDecoration: 'none'}}>
                    <MenuItem>Sign In</MenuItem>
                </Link>
                <Link to="/cart" style={{textDecoration: 'none'}}>
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