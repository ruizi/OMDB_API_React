import {colors, createMuiTheme} from "@material-ui/core";
import typography from "./typography";

export const theme = createMuiTheme({
    palette:{
        primary:{
            main:"#339df1",
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
    typography
})