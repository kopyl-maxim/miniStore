import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    text: string,
    path: string,
}

const HeaderInfoSection: React.FC<Props> = ({ text, path }) => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box>{text}</Box>
            <Box>{path}</Box>
        </Box>
    );
};
export default HeaderInfoSection;
