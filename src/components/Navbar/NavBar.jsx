// Navbar
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    navColor: {
        backgroundColor: "#333333"
    },
    btnChips: {
       
        width:"max-content",
        "&:hover": {
            color: "black",
            backgroundColor: "white",
            border: "1px",
            borderRadius: "10px",
            boxShadow: '0 3px 5px 2px',
        }
    }

}))
function NavBar(props) {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.navColor}>
            <Toolbar>
                {/* <IconButton edge="start" className={classes.menuButton}  aria-label="menu">
                    <MenuIcon />
                </IconButton> */}
                <Typography variant="h6" className={classes.title}>
                    Cpsmarttech
                 </Typography>
                <Button color="inherit" className={classes.btnChips}>Home</Button>
                <Button color="inherit" className={classes.btnChips}>Team</Button>
                <Button color="inherit" className={classes.btnChips}>About</Button>
                <Button color="inherit" className={classes.btnChips}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;