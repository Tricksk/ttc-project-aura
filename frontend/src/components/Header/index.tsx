import React, { useCallback } from 'react';
import { FiPower } from 'react-icons/fi';

import { Container, LogoContainer, LogoutButton, UserLoggedInfo } from './styles';
import logo from '../../assets/logo.svg';
import { useAuth } from '../../shared/hooks/auth';
import { useHistory } from 'react-router-dom';

const Header: React.FC = () => {
  const { logout } = useAuth();
  const history = useHistory();

  const onClick = useCallback(() => {
    logout();
    history.push('/');
  }, []);

  return (
    <Container>
      <LogoContainer>
        <img src={logo} alt="Aura Estética Corporal" />
      </LogoContainer>
      <div>
        <UserLoggedInfo>
          <div>
            <img src="https://instagram.fvix2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/43985327_134848544147683_7612169861069744737_n.jpg?tp=1&_nc_ht=instagram.fvix2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Jb9kPtzaMHMAX-pxql_&ccb=7-4&oh=1f27750a07d14044424fafe9af745ede&oe=60814411&_nc_sid=4f375e 640w" alt="Patrícia Coelho" />
          </div>
          <div>
            <p>Bem vinda,</p>
            <p>Patrícia Coelho</p>
          </div>
        </UserLoggedInfo>
        <LogoutButton onClick={onClick}>
          <FiPower color="var(--white)" size={40} />
        </LogoutButton>
      </div>
    </Container>
  );
}

export default Header;