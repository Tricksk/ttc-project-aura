import React from 'react';
import { FiBriefcase, FiFileText, FiLayout, FiUser, FiUsers } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

const LINKS = [
  { title: 'Dashboard', to: '/admin/dashboard', component: FiLayout },
  { title: 'Clientes', to: '/admin/clientes', component: FiUsers },
  { title: 'Fixas', to: '/admin/fixas', component: FiFileText },
  { title: 'Serviços', to: '/admin/servicos', component: FiBriefcase },
  { title: 'Usuários', to: '/admin/usuarios', component: FiUser },
];

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      {
        LINKS.map(link => (
          <Link className={pathname === link.to ? 'active' : ''} key={link.to} to={link.to} title={link.title}>
            <link.component size={40} color="var(--white)" />
            <p>{link.title}</p>
          </Link>
        ))
      }
    </Container>
  );
}

export default Sidebar;