import React, { createContext, useCallback, useContext, useState } from "react";
import * as uuid from "uuid";
import Toasts from "../../components/Toasts";

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

interface ToastContextData {
  messages: ToastMessage[];
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback((message: Omit<ToastMessage, 'id'>) => {
    const id = uuid.v4();

    const toast = {
      id,
      ...message
    }

    setMessages(state => [...state, toast]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, messages }}>
      {children}

      <Toasts messages={messages} />
    </ToastContext.Provider>
  );
}

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context)
    throw new Error('useToast must be used within a ToastProvider.');

  return context;
}

export { ToastProvider, useToast };
