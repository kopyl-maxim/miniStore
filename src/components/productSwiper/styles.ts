import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    productSwiper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginBottom: '7rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    labelContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1320px',
        width: '100%',
    },
    label: {
        '&.MuiTypography-root': {
            paddingBottom: '1rem',
            fontFamily: 'Lato, sans-serif',
            fontSize: '2rem',
        },
    },
    link: {
        '&.MuiLink-root': {
            fontSize: '1.1rem',
            letterSpacing: '2px',
            color: '#212529',
            textDecorationColor: '#212529',
            textTransform: 'uppercase',
            fontWeight: 400,
        },
    },
    swiperContainer: {
        maxWidth: '1320px',
        display: 'flex',
        justifyContent: 'center',
        height: '115%',
    },
    swiper: {
        '& .swiper-pagination-bullet': {
            width: '15px',
            height: '15px',
            background: '#4A4A4A',
        },
    },
});

export default useStyles;