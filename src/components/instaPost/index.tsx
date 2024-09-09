import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import instaItem1 from '../../assets/img/insta-item1.jpg';
import instaItem2 from '../../assets/img/insta-item2.jpg';
import instaItem3 from '../../assets/img/insta-item3.jpg';
import instaItem4 from '../../assets/img/insta-item4.jpg';
import instaItem5 from '../../assets/img/insta-item5.jpg';
import InstaCard from './instaCard';
import Typography from '@mui/material/Typography';

interface Props {
    // define your props here
}

const InstaPost: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.instaPost}>
            <Box className={classes.container}>
                <Typography className={classes.label}>Shop Our Insta</Typography>
                <Box className={classes.cardContainer}>
                    <InstaCard link={'/'} img={instaItem1} />
                    <InstaCard link={'/'} img={instaItem2} />
                    <InstaCard link={'/'} img={instaItem3} />
                    <InstaCard link={'/'} img={instaItem4} />
                    <InstaCard link={'/'} img={instaItem5} />
                </Box>
            </Box>
        </Box>
    );
};

export default InstaPost;
