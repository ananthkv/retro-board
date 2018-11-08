import React, { useContext } from 'react';
import { getUniverse } from 'retro-board-common';
import { Input } from '@material-ui/core';
import useTranslations from '../translations/useTranslations';

function Home() {
  const translations = useTranslations();
  return <div>Home {translations.Clients.header}</div>;
}

export default Home;
