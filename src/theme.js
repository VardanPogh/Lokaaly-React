import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#74368c',
        },
        secondary: {
            main: '#FFFFFF',
            dark: '#565656',
            light: '#929292',
            contrastText:'#F6F6F6'
        },
        text: {
            main: '#F0D283',
        },
        hint: {
            main: '#414141',
        }
    },
    typography: {
        "fontFamily": `Nunito`,
        "fontSize": 14,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }

});
export default theme;