import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import singleImage3 from '../../assets/img/single-image3.jpg';

interface Props {
    // define your props here
}

const AboutPost: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.mainContainer}>
            <Box className={classes.container}>
                <Box>
                    <img src={singleImage3} />
                </Box>
                <Box className={classes.postContainer}>
                    <Box className={classes.label}>How was Ministore Found?</Box>
                    <Box className={classes.massage}>Risus augue curabitur diam senectus congue velit et. Sed vitae
                        metus
                        nibh sit era. Nulla adipiscing
                        pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae
                        eget.
                        Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Quam
                        libero etiam et in ac at quis.
                        Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et
                        libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus
                        augue
                        curabitur diam senectus congue velit et.</Box>
                    <a href={'https://www.google.com.ua/maps/place/HARD+Kyiv+streetwear+shop/@50.4502795,30.5039774,15.5z/data=!4m10!1m2!2m1!1sshop!3m6!1s0x40d4cff414e4601f:0x461b5f10a68482aa!8m2!3d50.4509728!4d30.5133347!15sCgRzaG9wkgEOY2xvdGhpbmdfc3RvcmXgAQA!16s%2Fg%2F11f26450yd?hl=ru&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'}
                       className={classes.link}>shop our store</a>
                </Box>
            </Box>
        </Box>
    );
};

export default AboutPost;
