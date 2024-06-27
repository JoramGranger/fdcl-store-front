import React from 'react'
import styled from 'styled-components'
/* import SearchIcon from '@mui/icons-material/Search'; */
import Badge from '@mui/material/Badge';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo-black.png'
import appLogoCompressed from '../assets/app-logo-compressed-black.png'
import { ProductCategories} from '../data';

/* styled components */

const Container = styled.div`
    background-color: #FFc6d1;
    padding: 10px;
    -webkit-box-shadow: 5px 5px 15px -11px #000000; 
    box-shadow: 5px 5px 10px -11px #000000;
    ${mobile({})}
`;

const Wrapper = styled.div`
    padding: 20px, 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    ${mobile({})}
`;
const Bottom = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    /* margin-top: 20px; */
`;
const BottomMenuItem = styled.div`
font-size: 12px;
cursor: pointer;
margin-right: 5px;
margin-left: 5px;
color: #040404;
font-weight: 500;
text-transform: uppercase;
`; 

const StyledLink = styled(Link)`
text-decoration: none;
padding: 5px;
/* 
background-color: #FFE8E8;
border-radius: 5px;
-webkit-box-shadow: 5px 5px 15px -11px #000000; 
box-shadow: 5px 5px 10px -11px #000000;
 */
&:hover {
    background-color: #FFB6C1;
    color: #040404;
    transition: 1s all ease;
}
`;

const SecondaryNav = () => {
  return (
    <Container>
        <Wrapper>
            <Bottom>
                {
                    ProductCategories.subCategory.map((category, index) => (
                        <StyledLink key={index} to={category.link}>
                            <BottomMenuItem>{category.category}</BottomMenuItem>
                        </StyledLink>
                    ))
                }
            </Bottom>
            </Wrapper>
    </Container>
  )
}

export default SecondaryNav