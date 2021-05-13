import { Box, Container, Divider, Grid, List, ListItem, Paper, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useStyles from './Footer.style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer(props) {
    const classes = useStyles()

    return (
        <Container className={classes.footer}>
            <Grid container spacing={3}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Paper className={classes.paper}>
                        <Typography>
                            CPSMARTTECH
                        </Typography>

                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Paper className={classes.paper}>

                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Paper className={classes.paper}>
                        <List  className={classes.icons}>
                            <ListItem className={classes.about}>
                                <Typography >About Us</Typography>
                            </ListItem>
                            <ListItem className={classes.about}>
                                <Typography>Services</Typography>
                            </ListItem>
                            <ListItem className={classes.about}>
                                <Typography>Blogs</Typography>
                            </ListItem>
                            <ListItem className={classes.about}>
                                <Typography>Contact Us</Typography>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Paper className={classes.paper} >
                        <List className={classes.icons}>
                            <ListItem>
                                <FacebookIcon /><p className={classes.textLeft}>Facebook</p>
                            </ListItem>
                            <ListItem>
                                <InstagramIcon /><p className={classes.textLeft}>Instagram</p>
                            </ListItem>
                            <ListItem>
                                <GitHubIcon /><p className={classes.textLeft}>Github</p>
                            </ListItem>
                            <ListItem>
                                <TwitterIcon /><p className={classes.textLeft}>Twitter</p>
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;