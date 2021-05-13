// Navbar
import { AppBar, Button, Divider, Drawer, Hidden, IconButton, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import List from '@material-ui/core/List';
import useStyles from './Navbar.style';

function NavBar(props) {
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState(false)
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState(!open)
    }

    const list = () => (
        <div className={clsx(classes.list, classes.fullList)}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {
                    ['Home', 'Team', 'About', 'Contact'].map((text, index) => (
                        <>
                        <ListItem key={text}>
                            <Button color="inherit" className={classes.btnChipsList}>   {text}
                            </Button>
                           
                        </ListItem>
                        <Divider  variant="middle" light></Divider>
                        </>
                    ))
                }
            </List>
        </div>
    );
    console.log(list)
    return (
        <div>
            <Drawer
                classes={{ paper: classes.drawer }}
                open={drawerState}
                onClose={toggleDrawer(drawerState)}
            >
                {list()}
            </Drawer>
            <AppBar position="static" className={classes.navColor}>
                <Toolbar>
                    <Hidden smUp>
                        <IconButton edge="start" onClick={toggleDrawer(drawerState)} className={classes.menuButton} aria-label="menu" >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        Cpsmarttech
                    </Typography>
                    <Hidden xsDown>
                        <Button color="inherit" className={classes.btnChips}>Home</Button>
                        <Button color="inherit" className={classes.btnChips}>Team</Button>
                        <Button color="inherit" className={classes.btnChips}>About</Button>
                        <Button color="inherit" className={classes.btnChips}>Contact</Button>
                    </Hidden>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;