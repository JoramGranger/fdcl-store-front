import React, { useState } from 'react';
import styled from 'styled-components';

const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Tab = styled.div`
    padding: 10px 20px;
    cursor: pointer;
    background-color: ${(props) => (props.active ? '#f5f5f5' : 'transparent')};
    border-radius: 5px;
    margin-right: 10px;
    &:hover {
        background-color: #f5f5f5;
    }
`;

const Profile = () => {
    const [activeTab, setActiveTab] = useState('account');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <TabsContainer>
                <Tab active={activeTab === 'account'} onClick={() => handleTabClick('account')}>
                    Account Details
                </Tab>
                <Tab active={activeTab === 'payment'} onClick={() => handleTabClick('payment')}>
                    Payment Methods
                </Tab>
                <Tab active={activeTab === 'cards'} onClick={() => handleTabClick('cards')}>
                    Saved Cards
                </Tab>
                <Tab active={activeTab === 'wishlist'} onClick={() => handleTabClick('wishlist')}>
                    Wishlist
                </Tab>
            </TabsContainer>
            {/* Render content based on activeTab */}
            {activeTab === 'account' && (
                <div>
                    <h2>Account Details</h2>
                    {/* Add account details form or information */}
                </div>
            )}
            {activeTab === 'payment' && (
                <div>
                    <h2>Payment Methods</h2>
                    {/* Add payment methods list or form */}
                </div>
            )}
            {activeTab === 'cards' && (
                <div>
                    <h2>Saved Cards</h2>
                    {/* Add saved cards list or form */}
                </div>
            )}
            {activeTab === 'wishlist' && (
                <div>
                    <h2>Wishlist</h2>
                    {/* Add wishlist items or functionality */}
                </div>
            )}
        </>
    );
};

export default Profile;
