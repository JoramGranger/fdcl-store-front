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

const Orders = () => {
    const [activeTab, setActiveTab] = useState('all');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <TabsContainer>
                <Tab active={activeTab === 'all'} onClick={() => handleTabClick('all')}>
                    All Orders
                </Tab>
                <Tab active={activeTab === 'pending'} onClick={() => handleTabClick('pending')}>
                    Pending
                </Tab>
                <Tab active={activeTab === 'completed'} onClick={() => handleTabClick('completed')}>
                    Completed
                </Tab>
                <Tab active={activeTab === 'cancelled'} onClick={() => handleTabClick('cancelled')}>
                    Cancelled
                </Tab>
            </TabsContainer>
            {/* Render order details based on activeTab */}
            {activeTab === 'all' && <div>All Orders</div>}
            {activeTab === 'pending' && <div>Pending Orders</div>}
            {activeTab === 'completed' && <div>Completed Orders</div>}
            {activeTab === 'cancelled' && <div>Cancelled Orders</div>}
        </>
    );
};

export default Orders;
