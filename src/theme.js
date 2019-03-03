import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#336FAF',
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
