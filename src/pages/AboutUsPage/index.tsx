import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SubscribeForm from '../../components/subscribeForm';
import InstaPost from '../../components/instaPost';
import ReviewContent from '../../components/reviewContent';
import CompanyService from '../../components/companyService';
import AboutPost from '../../components/aboutPost';
import HeaderInfoSection from '../../components/headerInfoSection';

interface Props {
    // define your props here
}

const AboutUsPage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Header />
            <HeaderInfoSection text={'About Us'} path={'Home > About Us'} />
            <CompanyService />
            <AboutPost />
            <ReviewContent />
            <SubscribeForm />
            <InstaPost />
            <Footer />
        </Box>
    );
};

export default AboutUsPage;
