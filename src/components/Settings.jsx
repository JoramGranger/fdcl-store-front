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

const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <TabsContainer>
                <Tab active={activeTab === 'account'} onClick={() => handleTabClick('account')}>
                    Account Settings
                </Tab>
                <Tab active={activeTab === 'notifications'} onClick={() => handleTabClick('notifications')}>
                    Notification Settings
                </Tab>
                <Tab active={activeTab === 'security'} onClick={() => handleTabClick('security')}>
                    Security Settings
                </Tab>
            </TabsContainer>
            {/* Render content based on activeTab */}
            {activeTab === 'account' && (
                <div>
                    <h2>Account Settings</h2>
                    {/* Add account settings form or information */}
                </div>
            )}
            {activeTab === 'notifications' && (
                <div>
                    <h2>Notification Settings</h2>
                    {/* Add notification settings options or form */}
                </div>
            )}
            {activeTab === 'security' && (
                <div>
                    <h2>Security Settings</h2>
                    {/* Add security settings options or form */}
                </div>
            )}
        </>
    );
};

export default Settings;
