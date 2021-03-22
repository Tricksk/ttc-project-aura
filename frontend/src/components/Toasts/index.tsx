import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessage } from '../../shared/hooks/toast';

import { Container } from './styles';
import Toast from './Toast';

interface ToastsProps {
  messages: ToastMessage[];
}

const Toasts: React.FC<ToastsProps> = ({ messages }) => {
  const messagesWT = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 }
    }
  );

  return (
    <Container>
      {messagesWT.map(({ item, key, props }) =>
        <Toast key={key} style={props} message={item} />
      )}
    </Container >
  );
}

export default Toasts;