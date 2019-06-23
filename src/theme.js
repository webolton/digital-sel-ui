import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#336FAF',
    },
    secondary: {
      main: '#39C380',
    },
  },
  overrides: {
    MUIDataTableBodyCell: {
      root: {
        width: '100vw',
        position: 'relative',
      },
    },
    MUIDataTableSearch: {
      clearIcon: {
        '&:hover,&:focus': {
          color: '#AF3533',
        },
      },
    },
  },
});

export default theme;
