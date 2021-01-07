import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import Router from './routes';

const App: React.FC = () => (
  <>
    <AppProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppProvider>
    <GlobalStyles />
  </>
);
export default App;
