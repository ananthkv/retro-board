import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: blueGrey,
    secondary: pink,
  },
  overrides: {
    MuiDrawer: {
      paper: {
        width: '250px',
      },
    },
  },
});

export default theme;
