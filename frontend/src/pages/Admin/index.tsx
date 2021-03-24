import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';
import Dashboard from '../Dashboard/index';
import Clients from '../Clients';

const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />

        <Route path="/admin/dashboard" component={Dashboard} />
        <Route path="/admin/clientes" component={Clients} />
        <Route path="/admin/fixas" component={Clients} />
        <Route path="/admin/servicos" component={Clients} />
        <Route path="/admin/usuarios" component={Clients} />
      </Container>
    </>
  );
}

export default Admin;