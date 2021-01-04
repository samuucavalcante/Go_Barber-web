import React, { createContext, useState, useCallback, useContext } from 'react';

import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SignInCredentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('Gobarber:token');
    const user = localStorage.getItem('Gobarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthContextData;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post<{ token: string; user: object }>(
      'sessions',
      {
        email,
        password,
      },
    );

    const { user, token } = response.data;

    localStorage.setItem('Gobarber:token', token);
    localStorage.setItem('Gobarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContext');
  }

  return context;
}

export { AuthProvider, useAuth };
