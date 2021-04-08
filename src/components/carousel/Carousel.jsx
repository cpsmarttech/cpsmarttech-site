import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './Carousel.style'
function Carousel(props) {
    const classes = useStyles();
    const [currentContent, setCurrentContent] = useState(0);
    const content = [
        {
            title: "Cloud Solutions",
            description: "That accelerate your growth",
            imageUrl: "https://atos.net/wp-content/uploads/2020/04/lookout-main.banner.jpg"
        },
        {
            title: "Website Development",
            description: "Build amazing websites",
            imageUrl: "https://www.bsr.org/images/heroes/tech-against-trafficking-hero.jpg"
        },
        {
            title: "Mobile Development",
            description: "Build user friendly app",
            imageUrl: "https://www.inclusivecompanies.co.uk/wp-content/uploads/2020/05/Tech.jpg"
        }
    ]
    return (
        <>
            {
                content ? (
                    <Box className={clsx(classes.boxPosition, classes.imageCarousel)}
                        display="flex"
                        style={{ backgroundImage: `url(${content[currentContent].imageUrl})` }}
                    >
                        <Box
                            className={classes.left}
                            onClick={() => {
                                if (currentContent == 0) {
                                    setCurrentContent(content.length - 1);
                                }
                                else {
                                    setCurrentContent(currentContent - 1);
                                }
                            }}
                        >
                            <ArrowBackIos />
                        </Box>
                        <Box
                            flex="100%"
                           /*  justifyContent="center" */>
                            <Card className={classes.contentPosition}>
                                <CardContent className={classes.cardContent}>
                                    <Typography className={classes.title}>
                                        {content[currentContent].title}
                                    </Typography>
                                    <Typography className={classes.description}>
                                        {content[currentContent].description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                        <Box
                            className={classes.right}
                            onClick={() => {
                                if (currentContent == content.length - 1) {
                                    setCurrentContent(0);
                                } else {
                                    setCurrentContent(currentContent + 1);
                                }
                            }}
                        >
                            <ArrowForwardIos />
                        </Box>
                    </Box>
                ) : null
            }
        </>
    );
}

export default Carousel;