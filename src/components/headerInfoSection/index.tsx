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
            <Box className={classes.label}>{text}</Box>
            <Box className={classes.pathText}>{path}</Box>
        </Box>
    );
};
export default HeaderInfoSection;
