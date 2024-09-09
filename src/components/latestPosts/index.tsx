import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import PostCard from './postCard';
import postItem1 from '../../assets/img/post-item1.jpg';
import postItem2 from '../../assets/img/post-item2.jpg';
import postItem3 from '../../assets/img/post-item3.jpg';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {
    // define your props here
}

const LatestPosts: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.latestPosts}>
            <Box className={classes.container}>
                <Box className={classes.labelContainer}>
                    <Typography className={classes.label}>LATEST POSTS</Typography>
                    <Link className={classes.link} href={'/'}>read blog</Link>
                </Box>
                <Box className={classes.postCardContainer}>
                    <PostCard img={postItem1} dateInfo={'FEB 22, 2023 - GADGETS'}
                              label={'GET SOME COOL GADGETS IN 2023'} />
                    <PostCard img={postItem2} dateInfo={'FEB 25, 2023 - TECHNOLOGY'}
                              label={'TECHNOLOGY HACK YOU WON\'T GET'} />
                    <PostCard img={postItem3} dateInfo={'FEB 22, 2023 - CAMERA'}
                              label={'TOP 10 SMALL CAMERA IN THE WORLD'} />
                </Box>
            </Box>
        </Box>
    );
};

export default LatestPosts;
