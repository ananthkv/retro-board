import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from '@material-ui/core';
import useTranslations, { LanguageContext } from '../translations';
import logo from './home/logo.png';

interface HomeProps extends RouteComponentProps {}

function Home(props: HomeProps) {
  const translations = useTranslations();
  const createSession = useCallback(() => {
    props.history.push('/game/' + shortid());
  });
  return (
    <MainCard>
      <CardMedia image={logo} title="Retrospected" style={{ height: 200 }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {translations.Join.welcome}
        </Typography>
        <Typography component="p">
          {translations.Join.standardTab.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={createSession}>
          {translations.Join.standardTab.button}
        </Button>
      </CardActions>
    </MainCard>
  );
}

const MainCard = styled(Card)`
  max-width: 800px;
  margin: auto;
`;
export default withRouter(Home);
