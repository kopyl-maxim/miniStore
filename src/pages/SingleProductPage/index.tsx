import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';

interface Props {
    // define your props here
}

const SingleProductPage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>

        </Box>
    );
};

export default SingleProductPage;
