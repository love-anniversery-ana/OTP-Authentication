import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F44336',
      dark: '#D32F2F',
      light: '#FFCDD2',
    },
    secondary: {
      main: '#2D2D3A',
      dark: '#1D1D26',
      light: '#434357',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      text: '#FFFFFF',
    },
  },
});

export default theme;
