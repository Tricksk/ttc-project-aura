import React, { createContext, useCallback, useState, useContext } from "react";
import Api from "../services/api";

interface AuthContextData {
  user: LoginRespose | null;
  login(crededntials: LoginCredential): Promise<void>;
  logout(): void;
}

interface LoginRespose {
  token: string;
  user: object;
}

interface LoginCredential {
  login: string;
  password: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<LoginRespose | null>(() => {
    const token = localStorage.getItem('@Aura:token');
    const user = localStorage.getItem('@Aura:user');

    if (token && user)
      return { token, user: JSON.parse(user) };

    return null;
  });

  const login = useCallback(async ({ login, password }) => {
    const res = await Api.post<LoginRespose>('/sessions', {
      login,
      password
    });

    const { token, user } = res.data;

    localStorage.setItem('@Aura:token', token);
    localStorage.setItem('@Aura:user', JSON.stringify(user));

    setUser({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@Aura:token');
    localStorage.removeItem('@Aura:user');

    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error('useAuth must be used within a ToastProvider.');

  return context;
}

export { AuthProvider, useAuth };
