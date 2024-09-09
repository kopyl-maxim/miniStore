import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import imgNotFound from '../../../assets/png/image-not-found-scaled.png';
import Link from '@mui/material/Link';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import Typography from '@mui/material/Typography';

interface Props {
    name: string,
    price: number,
    link: string,
    img: string,
}

const ProductCard: React.FC<Props> = ({ name, price, link, img }) => {
    const classes = useStyles();

    return (
        <Box className={classes.productCard}>
            <Box className={classes.container}>
                <Box className={classes.imgContainer}>
                    <img src={img} alt={imgNotFound} />
                    <Link className={classes.linkButton} href={link}>
                        Add to card
                        <LocalGroceryStoreIcon />
                    </Link>
                </Box>
                <Box className={classes.massageContainer}>
                    <Link href={link} className={classes.name}>{name}</Link>
                    <Typography className={classes.price}>${price}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductCard;
