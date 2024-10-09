import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Header from '../../components/header';
import Footer from '../../components/footer';
import SubscribeForm from '../../components/subscribeForm';
import InstaPost from '../../components/instaPost';
import HeaderInfoSection from '../../components/headerInfoSection';
import Catalog from '../../components/catalog';

interface Props {
    // define your props here
}

const ShopPage: React.FC<Props> = () => {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Header />
            <HeaderInfoSection text={'Shop'} path={'Home > Shop'} />
            <Catalog />
            <SubscribeForm />
            <InstaPost />
            <Footer />
        </Box>
    );
};

export default ShopPage;
