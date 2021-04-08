// Navbar Style
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    imageCarousel: {
        width: "100vw",
        height: "40vh",
        // filter: 'blur(1px)',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'
    },
    boxPosition: {
        alignItems:"center",
        // justifyContent:"center",
    },
    contentPosition: {
        border: "none",
        boxShadow: "none",
        color: "white",
        backgroundColor: "rgba(0,0,0, 0)",
    },
    cardContent:{
        textAlign:"center"
    },
    title: {
        fontSize: 34,
        fontWeight:600
    },
    description:{
        fontSize:20,
    },
    left:{
        cursor:"pointer",
        color:'white',
        display:'grid',
        placeItems:'center',
    },
    right:{
        cursor:"pointer",
        color:'white',
        display:'grid',
        placeItems:'center',
    }
}))

export default useStyles