// Navbar
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import { useStyles } from './Navbar.style';

function NavBar() {
    const classes = useStyles();
    const [menuState, setMenuState] = useState(false)
    return (
        <div>
            <AppBar position="fixed" className={classes.AppColor}>
                <Toolbar>
                    {
                        menuState
                            ? <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                            : <></>
                    }
                    <Typography variant="h6" className={classes.title}>
                        Cpsmarttech
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
