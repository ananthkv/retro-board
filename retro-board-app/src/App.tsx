import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import GlobalStyles from './GlobalStyles';
import { LanguageContext } from './translations';
import theme from './Theme';
import { Provider as StateContext } from './state';
import Layout from './Layout';

function App() {
  const [language, setLanguage] = useState('fr');
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <LanguageContext.Provider value={{ language, setLanguage }}>
          <StateContext>
            <GlobalStyles />
            <Layout />
          </StateContext>
        </LanguageContext.Provider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
