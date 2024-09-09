import React from 'react';
import Box from '@mui/material/Box';
import useStyles from './styles';
import MainPage from './pages/MainPage';

interface Props {
    // define your props here
}

const App: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <MainPage />
        </Box>
    );
};

export default App;
