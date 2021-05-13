import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: "#333333",
        position: 'sticky',
        left: 0,
        bottom: 0,
        maxWidth: "100%"
    },
    paper: {
        marginTop: '10%',
        marginBottom: '10%',
        height: "30vh",
        backgroundColor: '#333333',
        color: 'white',
        textAlign: 'center',
        boxShadow:"none"
    },
    about:{
        // paddingTop: '10%',
        paddingBottom: '5%',
        paddingTop: "5%",
        justifyContent: 'center'
    },
    icons:{
        paddingTop: 0,
    },
    textLeft:{
        marginLeft:'5%'
    }

}))

export default useStyles