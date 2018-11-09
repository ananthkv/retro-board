import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import { LanguageContext } from './translations';
import { Provider as StateContext } from './state';
import Layout from './Layout';

function App() {
  const [language, setLanguage] = useState('fr');
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <StateContext>
        <GlobalStyles />
        <Layout />
      </StateContext>
    </LanguageContext.Provider>
  );
}

export default App;
