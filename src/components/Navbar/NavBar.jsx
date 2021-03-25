// Navbar
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
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
    btnhover:{
        borderRadius: '20px',
        width: '100px',
        padding:'5px',
        // backgroundColor: 'red',
        "&:hover":{
            borderRadius: '20px',
            width: '100px',
            padding:'5px',
            backgroundColor: '#595757'
        }
    }
}));
function NavBar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.AppColor}>
                <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        CpSmartTech
                    </Typography>
                    <Button color="inherit" className={classes.btnhover}>Home</Button>
                    <Button color="inherit" className={classes.btnhover}>About</Button>
                    <Button color="inherit" className={classes.btnhover}>Team</Button>
                    <Button color="inherit" className={classes.btnhover}>Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
