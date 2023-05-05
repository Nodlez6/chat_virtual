// src/views/Dashboard/Dashboard.jsx
import React from 'react';
import { Chat } from '../../components/Chat/Chat';
import { Layout } from 'antd';
import './Dashboard.css';
import ActivityOne from '../../components/Activitys/ActivityOne/ActivityOne';

const { Sider, Content } = Layout;

const Dashboard = () => {
  return (
    <Layout className="dashboard">
      <Sider className="chat-container" width="30%">
        <Chat />
      </Sider>
      <Content className="activity-container">
        <ActivityOne />
      </Content>
    </Layout>
  );
};

export default Dashboard;
