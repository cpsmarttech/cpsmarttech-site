// Navbar Style
import { makeStyles} from "@material-ui/core/styles";
export const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow: 1,
    },
    // menuButton: {
    //     marginRight: theme.spacing(2),
    // },
    title: {
        flexGrow: 1,
    },
    AppColor: {
        backgroundColor: '#333333'
    },
   

    btnhover: {
        borderRadius: '20px',
        width: '100px',
        padding: '5px',
        // backgroundColor: 'red',
        "&:hover": {
            borderRadius: '20px',
            width: '100px',
            padding: '5px',
            color: '#333333',
            backgroundColor: 'white'
        }
    }
}))