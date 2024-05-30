import { Facebook, Pinterest, X, Instagram, Room, Phone, MailOutline } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    background-color: #ffe5e5;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:  #ffe5e5;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;



const Payment = styled.div``;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Fortune Derma</Logo>
            <Description>
                Fortune Derma Fortune Derma Fortune Derma Fortune Derma
                Fortune Derma Fortune Derma Fortune Derma Fortune Derma
                Fortune Derma Fortune Derma Fortune Derma Fortune Derma
                Fortune Derma Fortune Derma Fortune Derma Fortune Derma
            </Description>
            <SocialContainer>
                <SocialIcon color="040404">
                    <Facebook />
                </SocialIcon>
                <SocialIcon color="040404">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="040404">
                    <X />
                </SocialIcon>
                <SocialIcon color="040404">
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>All Categories</ListItem>
                <ListItem>Skin Type</ListItem>
                <ListItem>Skin Concern</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Terms</ListItem>
                <ListItem>Favorites</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: '10px'}}/>
                plot 6 Bukoto Street Level 4 & Level 5
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: '10px'}}/>
                +256 700 000 000
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: '10px'}}/>
                contact@fortunederma.com
            </ContactItem>
            <Payment src="" />
        </Right>
    </Container>
  )
}

export default Footer