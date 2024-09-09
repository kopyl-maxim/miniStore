import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
    label: string;
    message: string;
    icon: React.ReactNode;
}

const CompanyServiceItem: React.FC<Props> = ({ label, message, icon }) => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Box className={classes.iconContainer}>
                {icon}
            </Box>
            <Box className={classes.textContainer}>
                <Typography className={classes.label}>
                    {label}
                </Typography>
                <Typography className={classes.message}>
                    {message}
                </Typography>
            </Box>
        </Box>
    );
};

export default CompanyServiceItem;
