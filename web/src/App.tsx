import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import { AuthProvider } from './hooks/auth';

import Router from './routes';

const App: React.FC = () => (
  <AuthProvider>
    <BrowserRouter>
      <Router />
      <GlobalStyles />
    </BrowserRouter>
  </AuthProvider>
);
export default App;
