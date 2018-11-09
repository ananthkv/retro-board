import React, { useContext, useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import useTranslations, { LanguageContext } from '../translations';
import useGlobalState from '../state';
import LanguagePicker from '../components/LanguagePicker';

function Panel() {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  const { state, togglePanel } = useGlobalState();
  return (
    <Drawer open={state.panelOpen} onClose={togglePanel}>
      <LanguagePicker
        value={languageContext.language}
        onChange={languageContext.setLanguage}
      />
    </Drawer>
  );
}

export default Panel;
