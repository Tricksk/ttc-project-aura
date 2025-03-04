import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';

import AppProvider from './shared/hooks';
import Routes from './routes';

const App: React.FC = () => {

  return (
    <>
      <AppProvider>
        <Router>
          <Routes />
        </Router>
      </AppProvider>

      <GlobalStyle />
    </>
  )
}

export default App;
