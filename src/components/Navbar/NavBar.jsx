// Navbar
import { AppBar, Button, Drawer, IconButton, ListItem, ListItemText, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white"
    },
    title: {
        flexGrow: 1,
        "&:hover": {
            color: "#008080"
        }
    },
    navColor: {
        backgroundColor: "#333333"
    },
    btnChips: {
        paddingLeft: "30px",
        paddingRight: "30px",
        width: "max-content",
        borderRadius: "25px",
        "&:hover": {
            backgroundColor: "#008080",
            border: "1px",
            borderRadius: "25px",
        },
    },
    list: {
        width: "40%",
    },
    fullList: {
        width: 'auto',
    },
    drawer:{
        backgroundColor:"#333333",
        color:"white",
    }
   
}))
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
                        <ListItem  key={text}>
                            <Button color="inherit" className={classes.btnChips}>   {text}
                            </Button>
                        </ListItem>
                    ))
                }
            </List>
        </div>
    );
    console.log(list)
    return (
        <div>
            <Drawer
                classes={{paper:classes.drawer}}
                open={drawerState}
                onClose={toggleDrawer(drawerState)}
            >
                {list()}
            </Drawer>
            <AppBar position="static" className={classes.navColor}>
                <Toolbar>
                    <IconButton edge="start" onClick={toggleDrawer(drawerState)} className={classes.menuButton} aria-label="menu">
                        <MenuIcon />

                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Cpsmarttech
                 </Typography>
                    <Button color="inherit" className={classes.btnChips}>Home</Button>
                    <Button color="inherit" className={classes.btnChips}>Team</Button>
                    <Button color="inherit" className={classes.btnChips}>About</Button>
                    <Button color="inherit" className={classes.btnChips}>Contact</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;