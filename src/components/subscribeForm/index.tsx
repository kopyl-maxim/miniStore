import React, { useState } from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    // define your props here
}

const SubscribeForm: React.FC<Props> = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        // Логика подписки
        console.log('Subscribed with email:', email);
    };

    return (
        <Box className={classes.subscribeForm}>
            <Box className={classes.container}>
                <Box className={classes.textContainer}>
                    <Typography className={classes.label}>SUBSCRIBE US NOW</Typography>
                    <Typography className={classes.massage}>Get latest news, updates and deals directly mailed to your
                        inbox.</Typography>
                </Box>
                <Box className={classes.formContainer}>
                    <TextField
                        className={classes.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                    <Button
                        className={classes.button}
                        onClick={handleSubscribe}
                        variant="contained"
                    >
                        Subscribe
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SubscribeForm;
