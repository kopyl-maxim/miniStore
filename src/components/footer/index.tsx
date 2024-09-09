import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FooterBottom from './footerBottom';

interface Props {
    // define your props here
}

const Footer: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Box className={classes.mainContainer}>
                <Box className={classes.container}>
                    <Box className={classes.linkContainer}>
                        <Box className={classes.mainLabel}>
                            MiniStore
                            <Box color="#717171">.</Box>
                        </Box>
                        <Typography className={classes.mainMassage}>
                            Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat
                            aenean odio erat nullam fringilla.
                        </Typography>
                        <Box className={classes.socialLinkContainer}>
                            <FacebookIcon />
                            <InstagramIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                            <YouTubeIcon />
                        </Box>
                    </Box>
                    <Box className={classes.quickLinkContainer}>
                        <Typography className={classes.label}>QUICK LINKS</Typography>
                        <List className={classes.linkList}>
                            <ListItem>HOME</ListItem>
                            <ListItem>ABOUT</ListItem>
                            <ListItem>SHOP</ListItem>
                            <ListItem>BLOGS</ListItem>
                            <ListItem>CONTACT</ListItem>
                        </List>
                    </Box>
                    <Box className={classes.infoContainer}>
                        <Typography className={classes.label}>HELP & INFO HELP</Typography>
                        <List className={classes.linkList}>
                            <ListItem>TRACK YOUR ORDER</ListItem>
                            <ListItem>RETURNS POLICIES</ListItem>
                            <ListItem>SHIPPING + DELIVERY</ListItem>
                            <ListItem>CONTACT US</ListItem>
                            <ListItem>FAQS</ListItem>
                        </List>
                    </Box>
                    <Box className={classes.contactContainer}>
                        <Typography className={classes.label}>CONTACT US</Typography>
                        <Box className={classes.contactMassageContainer}>
                            <Typography className={classes.contactMassage}>Do you have any queries or
                                suggestions?
                            </Typography>
                            <Typography className={classes.contactInfo}>yourinfo@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography className={classes.contactMassage}>If you need support? Just give us a
                                call.
                            </Typography>
                            <Typography className={classes.contactInfo}>+55 111 222 333 44</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.underline} />
            <FooterBottom />
        </Box>
    );
};

export default Footer;
