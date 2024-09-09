import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ProductCard from './productCard';

interface CardInfo {
    name: string;
    price: number;
    link: string;
    img: string;
}

interface Props {
    label: string,
    shopLink: string,
    cardInfo: CardInfo[];
}

const ProductSwiper: React.FC<Props> = ({ label, shopLink, cardInfo }) => {
    const classes = useStyles();

    return (
        <Box className={classes.productSwiper}>
            <Box className={classes.labelContainer}>
                <Typography className={classes.label}>{label}</Typography>
                <Link className={classes.link} href={shopLink}>Go to Shop</Link>
            </Box>
            <Box className={classes.container}>
                <Box className={classes.swiperContainer}>
                    <Swiper
                        className={classes.swiper}
                        spaceBetween={50}
                        modules={[Pagination]}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {cardInfo.map(item => (
                            <SwiperSlide>
                                <ProductCard name={item.name} price={item.price} link={item.link} img={item.img} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductSwiper;
