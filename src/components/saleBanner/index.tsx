import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {
    link: string,
    img: string,
    label: string,
    message: string,
}

const SaleBanner: React.FC<Props> = ({ link, img, label, message }) => {
    const classes = useStyles();

    return (
        <Box
            className={classes.saleBanner}
            style={{ backgroundImage: img ? `url(${img})` : 'none' }}
        >
            <Box className={classes.container}>
                <Typography className={classes.message}>{message}</Typography>
                <Typography className={classes.label}>{label}</Typography>
                <Link className={classes.link} href={link}>Shop Sale</Link>
            </Box>
        </Box>
    );
};

export default SaleBanner;
