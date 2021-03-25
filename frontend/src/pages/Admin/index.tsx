import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';
import Dashboard from './Dashboard';
import Clients from './Clients';

const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />

        <Switch>
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Route path="/admin/clientes" exact component={Clients} />
          <Route path="/admin/fixas" exact component={Clients} />
          <Route path="/admin/servicos" exact component={Clients} />
          <Route path="/admin/usuarios" exact component={Clients} />
          <Redirect from='/admin' to='/admin/dashboard' />
        </Switch>
      </Container>
    </>
  );
}

export default Admin;