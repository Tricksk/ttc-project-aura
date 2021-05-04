import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import { Container } from './styles';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Services from './Services';
import Records from './Records';
import Users from './Users';

const Admin: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Sidebar />

        <Switch>
          <Route path="/admin/dashboard" exact component={Dashboard} />
          <Route path="/admin/clientes" exact component={Clients} />
          <Route path="/admin/fixas" exact component={Records} />
          <Route path="/admin/servicos" exact component={Services} />
          <Route path="/admin/usuarios" exact component={Users} />
          <Redirect from='/admin' to='/admin/dashboard' />
        </Switch>
      </Container>
    </>
  );
}

export default Admin;