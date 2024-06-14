import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 200px;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
`;

const Title = styled.h3`
    font-weight: 500;
    margin-bottom: 20px;
`;

const NavLink = styled(Link)`
    display: block;
    text-decoration: none;
    color: #333;
    padding: 10px 0;
    padding-left: 10px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #FFE9E9;
        border-radius: 5px;
    }
`;

const LeftNavigation = () => {
    return (
        <Container>
            {/* <Title>Navigation</Title> */}
            <NavLink to="/my">Profile</NavLink>
            <NavLink to="/my/orders">My Orders</NavLink>
            {/* <NavLink to="/my/wishlist">My Wish List</NavLink> */}
            <NavLink to="/my/settings">Settings</NavLink>
            {/* Add more necessary links */}
        </Container>
    );
};

export default LeftNavigation;
