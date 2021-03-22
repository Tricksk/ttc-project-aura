import React from 'react';
import { Route, Switch } from 'react-router';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ minHeight: '100%', width: '100%', background: '#F4EDE8', zIndex: 1 }}></div>
      </div>
    </Container>
  );
}

export default Dashboard;