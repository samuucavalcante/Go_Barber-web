import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';

import Router from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Router />
    <GlobalStyles />
  </BrowserRouter>
);
export default App;
