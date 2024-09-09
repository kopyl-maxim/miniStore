import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';

interface Props {
    // define your props here
}

const Contact: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>

        </Box>
    );
};

export default Contact;
