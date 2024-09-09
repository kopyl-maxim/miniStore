import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import imageNotFound from '../../../assets/png/image-not-found-scaled.png';

interface Props {
    img: string;
    dateInfo: string;
    label: string;
}

const PostCard: React.FC<Props> = ({ img, dateInfo, label }) => {
    const classes = useStyles();

    return (
        <Box className={classes.postCard}>
            <Box className={classes.imgContainer}>
                <img src={img} alt={imageNotFound} />
            </Box>
            <Box className={classes.infoContainer}>
                <Typography className={classes.dateInfo}>
                    {dateInfo}
                </Typography>
                <Link className={classes.labelLink} href={'/'}>
                    {label}
                </Link>
            </Box>
        </Box>
    );
};

export default PostCard;
