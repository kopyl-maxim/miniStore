import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import slideImg from '../../assets/png/banner-image.png';
import imgNotFound from '../../assets/png/image-not-found-scaled.png';
import Carousel from 'react-bootstrap/Carousel';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowIcon from './ArrowIcon';

interface Props {
    // define your props here
}

const Carousels: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Carousel nextIcon={<ArrowIcon size={'40%'} direction={'right'} fill={'#D7DDDF'} />}
                      prevIcon={<ArrowIcon size={'40%'} direction={'left'} fill={'#D7DDDF'} />}
                      className={classes.carousel} touch={true}>
                <Carousel.Item>
                    <Box className={classes.carouselItemContainer}>
                        <Box className={classes.carouselItem}>
                            <Box className={classes.slideButtonContainer}>
                                <Typography className={classes.slideText}>
                                    Your Products Are Great.
                                </Typography>
                                <Button className={classes.slideButton}>shop product</Button>
                            </Box>
                            <Box className={classes.slideImgContainer}>
                                <img src={slideImg} alt={imgNotFound} />
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box className={classes.carouselItemContainer}>
                        <Box className={classes.carouselItem}>
                            <Box className={classes.slideButtonContainer}>
                                <Typography className={classes.slideText}>
                                    Your Products Are Great.
                                </Typography>
                                <Button className={classes.slideButton}>shop product</Button>
                            </Box>
                            <Box className={classes.slideImgContainer}>
                                <img src={slideImg} alt={imgNotFound} />
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
                <Carousel.Item>
                    <Box className={classes.carouselItemContainer}>
                        <Box className={classes.carouselItem}>
                            <Box className={classes.slideButtonContainer}>
                                <Typography className={classes.slideText}>
                                    Your Products Are Great.
                                </Typography>
                                <Button className={classes.slideButton}>shop product</Button>
                            </Box>
                            <Box className={classes.slideImgContainer}>
                                <img src={slideImg} alt={imgNotFound} />
                            </Box>
                        </Box>
                    </Box>
                </Carousel.Item>
            </Carousel>
        </Box>
    );
};

export default Carousels;
