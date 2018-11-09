import React, { useContext } from 'react';
import useTranslations, { LanguageContext } from '../translations';
import LanguagePicker from '../components/LanguagePicker';

function Game() {
  const translations = useTranslations();
  const languageContext = useContext(LanguageContext);
  return (
    <div>
      <div>Game {translations.Clients.header}</div>
      <div>
        <LanguagePicker
          value={languageContext.language}
          onChange={languageContext.setLanguage}
        />
      </div>
    </div>
  );
}

export default Game;
