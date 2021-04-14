import React from 'react';
import { ToastProvider } from './toast';
import { AuthProvider } from './auth';
import { ModalProvider } from './modal';


const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <ToastProvider>{children}</ToastProvider>
      </ModalProvider>
    </AuthProvider>
  );
}

export default AppProvider;