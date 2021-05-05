import {colors, createMuiTheme} from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#339df1",
            contrastText: "#fff",
        },
        background: {
            default: '#F4F6F8',
            paper: colors.common.white
        },
        text: {
            primary: '#172b4d',
            secondary: '#6b778c',
        }
    },
    typography: {
        h1: {
            fontWeight: 500,
            fontSize: 35,
            letterSpacing: '-0.24px'
        },
        h2: {
            fontWeight: 500,
            fontSize: 29,
            letterSpacing: '-0.24px'
        },
        h3: {
            fontWeight: 500,
            fontSize: 24,
            letterSpacing: '-0.06px'
        },
        h4: {
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: '-0.06px'
        },
        h5: {
            fontWeight: 500,
            fontSize: 16,
            letterSpacing: '-0.05px'
        },
        h6: {
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: '-0.05px'
        },
        overline: {
            fontWeight: 500
        }
    }
})