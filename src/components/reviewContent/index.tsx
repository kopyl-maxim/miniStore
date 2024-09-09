import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Carousel from 'react-bootstrap/Carousel';
import ArrowIcon from '../carousels/ArrowIcon';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import slideImg from '../../assets/png/banner-image.png';
import imgNotFound from '../../assets/png/image-not-found-scaled.png';


interface Props {
    // define your props here
}

const ReviewContent: React.FC<Props> = () => {
    let reviewData = [
        {
            massage: '“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”',
            rating: 3.5,
            name: 'Emma Chamberlin',
        },
        {
            massage: '“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”',
            rating: 4.5,
            name: 'Jennie Rose',
        },
    ];
    const classes = useStyles();

    return (
        <Box className={classes.reviewContent}>
            <Box className={classes.container}>
                <Box className={classes.iconContainer}>
                    <FormatQuoteIcon />
                </Box>
                <Box>
                    <Carousel nextIcon={<ArrowIcon size={'20%'} direction={'right'} fill={'#D7DDDF'} />}
                              prevIcon={<ArrowIcon size={'20%'} direction={'left'} fill={'#D7DDDF'} />}
                              touch={true} indicators={false}
                    >
                        {reviewData.map(item => (
                            <Carousel.Item>
                                <Box className={classes.carouselItem}>
                                    <Box className={classes.carouselContainer}>
                                        <Box className={classes.carouselText}>
                                            <Typography className={classes.massage}>
                                                {item.massage}
                                            </Typography>
                                            <Rating className={classes.rating} value={item.rating} readOnly={true}
                                                    precision={0.5} />
                                            <Typography className={classes.name}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </Box>
    );
};

export default ReviewContent;
