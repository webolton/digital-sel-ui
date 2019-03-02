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
        minWidth: 400,
      },
    },
  },
});

export default theme;
