import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import imgNotFound from '../../../assets/img/visa.jpg';

interface Props {
    name: string;
    link: string;
    price: number;
    img: string;
}

const GoodsTile: React.FC<Props> = ({ link, name, price, img }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box display='flex'>
                <Box className={classes.imgContainer}>
                    <img src={img} alt={imgNotFound} className={classes.image} />
                    <Box className={classes.linkContainer}>
                        <Link className={classes.linkButton} to={link}>Add to cart</Link>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.textContainer}>
                <Link to={link} className={classes.name}>{name}</Link>
                <Box className={classes.price}>${price}</Box>
            </Box>
        </Box>
    );
};

export default GoodsTile;