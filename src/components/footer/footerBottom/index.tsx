import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import dhl from '../../../assets/png/dhl.png';
import shippingCard from '../../../assets/png/shippingcard.png';
import imageNotFound from '../../../assets/png/image-not-found-scaled.png';
import visa from '../../../assets/img/visa.jpg';
import paypal from '../../../assets/img/paypal.jpg';
import mastercard from '../../../assets/img/mastercard.jpg';

interface Props {
    // define your props here
}

const FooterBottom: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footerBottom}>
            <Box className={classes.container}>
                <Box className={classes.textContainer}>
                    <Typography className={classes.text}>We ship with:</Typography>
                    <img src={dhl} alt={imageNotFound} />
                    <img src={shippingCard} alt={imageNotFound} />
                </Box>
                <Box className={classes.textContainer}>
                    <Typography className={classes.text}>Payment options:</Typography>
                    <img src={visa} alt={imageNotFound} />
                    <img className={classes.img} src={paypal} alt={imageNotFound} />
                    <img src={mastercard} alt={imageNotFound} />
                </Box>
                <Box className={classes.textContainer}>
                    <Typography className={classes.text}>© Copyright 2023 MiniStore.</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default FooterBottom;
