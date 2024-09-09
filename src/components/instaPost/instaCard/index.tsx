import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import imgNotFound from '../../../assets/png/image-not-found-scaled.png';
import InstagramIcon from '@mui/icons-material/Instagram';

interface Props {
    link: string,
    img: string,
}

const InstaCard: React.FC<Props> = ({ link, img }) => {
    const classes = useStyles();

    return (
        <Box className={classes.instaCard}>
            <Link className={classes.link} href={link}>
                <img className={classes.img} src={img} alt={imgNotFound} />
                <Box className={classes.iconOverlay}>
                    <InstagramIcon fill={'black'} />
                </Box>
            </Link>
        </Box>
    );
};

export default InstaCard;
