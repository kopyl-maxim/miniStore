import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Header from '../../components/header';
import Carousels from '../../components/carousels';
import CompanyService from '../../components/companyService';
import Footer from '../../components/footer';
import LatestPosts from '../../components/latestPosts';
import SubscribeForm from '../../components/subscribeForm';
import SaleBanner from '../../components/saleBanner';
import SingleImg from '../../assets/img/single-image1.png';
import ReviewContent from '../../components/reviewContent';
import InstaPost from '../../components/instaPost';
import ProductSwiper from '../../components/productSwiper';
import productItem1 from '../../assets/img/product-item1.jpg';
import productItem2 from '../../assets/img/product-item2.jpg';
import productItem3 from '../../assets/img/product-item3.jpg';
import productItem4 from '../../assets/img/product-item4.jpg';
import productItem5 from '../../assets/img/product-item5.jpg';
import productItem6 from '../../assets/img/product-item6.jpg';
import productItem7 from '../../assets/img/product-item7.jpg';
import productItem8 from '../../assets/img/product-item8.jpg';
import productItem9 from '../../assets/img/product-item9.jpg';
import productItem10 from '../../assets/img/product-item10.jpg';

interface Props {
    // define your props here
}

const MainPage: React.FC<Props> = () => {
    const mobileArray = [
        {
            name: 'iphone 11',
            price: 1100,
            link: '/',
            img: productItem1,
        },
        {
            name: 'iphone 13',
            price: 1200,
            link: 'Emma Chamberlin',
            img: productItem2,
        },
        {
            name: 'iphone 8',
            price: 800,
            link: '/',
            img: productItem3,
        },
        {
            name: 'iphone X',
            price: 1300,
            link: '/',
            img: productItem4,
        },
        {
            name: 'iphone 15',
            price: 400,
            link: '/',
            img: productItem5,
        },
    ];
    const watchArray = [
        {
            name: 'Pink watch',
            price: 500,
            link: '/',
            img: productItem6,
        },
        {
            name: 'Heavy watch',
            price: 300,
            link: 'Emma Chamberlin',
            img: productItem7,
        },
        {
            name: 'spotted watch',
            price: 250,
            link: '/',
            img: productItem8,
        },
        {
            name: 'black watch',
            price: 350,
            link: '/',
            img: productItem9,
        },
        {
            name: 'black watch',
            price: 400,
            link: '/',
            img: productItem10,
        },
    ];
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Header />
            <Carousels />
            <CompanyService />
            <ProductSwiper label={'MOBILE PRODUCTS'} shopLink={'/'} cardInfo={mobileArray} />
            <ProductSwiper label={'SMART WATCHES'} shopLink={'/'} cardInfo={watchArray} />
            <SaleBanner link={'/'} img={SingleImg} label={'NEW YEAR SALE'} message={'10% off'} />
            <LatestPosts />
            <ReviewContent />
            <SubscribeForm />
            <InstaPost />
            <Footer />
        </Box>
    );
};


// @ts-ignore
export default MainPage;