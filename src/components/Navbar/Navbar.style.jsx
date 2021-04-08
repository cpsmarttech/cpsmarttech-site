// Navbar Style
import { makeStyles } from '@material-ui/core/styles';
 const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white"
    },
    title: {
        flexGrow: 1,
        // "&:hover": {
        //     color: "#008080"
        // }
    },
    navColor: {
        backgroundColor: "#333333"
    },
    btnChips: {
        paddingLeft: "30px",
        paddingRight: "30px",
        borderRadius: "25px",
        "&:hover": {
            // backgroundColor: "#008080",
            color:"#333333",
            backgroundColor: "white",
            border: "1px",
            borderRadius: "25px",
        },
    },
    btnChipsList: {
        paddingLeft: "30px",
        paddingRight: "30px",
        width: "100%",
        "&:hover": {
            // backgroundColor: "#008080",
            color:"#333333",
            backgroundColor: "white",
            border: "1px",
        },
    },
    list: {
        width: "40%",
    },
    fullList: {
        width: 'auto',
    },
    drawer: {
        backgroundColor: "#333333",
        color: "white",
    }

}))


export default useStyles