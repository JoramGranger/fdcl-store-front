import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import appLogoCompressed from '../assets/app-logo-compressed-black.png';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: #FFB6C1;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;

  img {
    height: 40px;
    margin-right: 10px;
  }

  h1 {
    color: #fff;
    font-size: 1.5rem;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  border: none;
  border-radius: 25px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px 10px;
  height: 35px;
  background-color: #FFE8E8;
  max-width: 60%;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  margin-right: 52%;
  &:focus {
    outline: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CircularLink = styled(Link)`
  text-decoration: none;
  padding: 10px;
  height: 30px;
  width: 30px;
  align-items: center;
  justify-content: center;
  background-color: #040404;
  border-radius: 50%;
  margin-left: 25px;
  -webkit-box-shadow: 5px 5px 15px -11px #000000; 
  box-shadow: 5px 5px 10px -11px #000000;
  &:hover {
    background-color: #FDE2F3;
    transition: 1s all ease;
  }
`;
const RectangularLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  background-color: #040404;
  border-radius: 10px;
  margin-left: 25px;
  -webkit-box-shadow: 5px 5px 15px -11px #000000; 
  box-shadow: 5px 5px 10px -11px #000000;
  &:hover {
    background-color: #FDE2F3;
    transition: 1s all ease;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: #ffe5e5;
  font-weight: 500;
  &:hover {
    color: #040404;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #040404;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  z-index: 105;
  animation: ${props => (props.menuOpen ? slideIn : slideOut)} 1s forwards;

  a {
    color: #fff;
    padding: 10px;
    width: auto;
    text-align: center;
    text-decoration: none;
  }
`;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logged, setLogged] = useState(false);

  return (
    <>
      <NavbarContainer>
        {/* <MenuIcon
          onClick={() => setMenuOpen(true)} 
          style={{ cursor: 'pointer', color: '#040404', fontWeight: 'bold', fontSize: '30px', marginRight: '20px' }}
        /> */}
        <Link to="/" style={{textDecoration: 'none'}}>
        <Logo>
          <img src={appLogoCompressed} alt="Logo" />
        </Logo>
        </Link>
        <SearchContainer>
          <Input placeholder="Search..." />
          <Search style={{ color: 'black', fontSize: 20 }} />
        </SearchContainer>
        <Right>
          <CircularLink to="/cart" style={{ textDecoration: 'none' }}>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>                    
            </MenuItem>
          </CircularLink>
          {
            logged ? 
            <>
                <CircularLink to="/" style={{ textDecoration: 'none' }}>
                <MenuItem>
                  <PersonIcon />                    
                </MenuItem>
                </CircularLink>
            </>
            :
            <>
                <RectangularLink to="/auth/register" style={{ textDecoration: 'none' }}>
                  <MenuItem>Register</MenuItem>
                </RectangularLink>
                <RectangularLink to="/auth/login" style={{ textDecoration: 'none' }}>
                  <MenuItem>Sign In</MenuItem>
                </RectangularLink>
            </>
          }
          
        </Right>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
