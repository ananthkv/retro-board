import React, { useContext, useCallback } from 'react';
import { Drawer } from '@material-ui/core';
import useTranslations, { LanguageContext } from '../translations';
import useGlobalState from '../state';
import LanguagePicker from '../components/LanguagePicker';

function Panel() {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  const { state, dispatch } = useGlobalState();
  const onCloseHandler = useCallback(() => dispatch({ type: 'toggle-panel' }));
  return (
    <Drawer open={state.panelOpen} onClose={onCloseHandler}>
      <LanguagePicker
        value={languageContext.language}
        onChange={languageContext.setLanguage}
      />
    </Drawer>
  );
}

export default Panel;
