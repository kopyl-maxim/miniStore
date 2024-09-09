import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    reviewContent: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
    },
    container: {
        maxWidth: '1575px',
        width: '100%',
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        '& .MuiSvgIcon-root': {
            fill: '#EDF1F3',
            height: '150px',
            width: '100%',
        },
    },
    carouselItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 2rem',
    },
    carouselContainer: {
        display: 'flex',
        flex: '0 0 auto',
        width: '84%',
    },
    carouselText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
    },
    massage: {
        '&.MuiTypography-root': {
            fontSize: '2.5rem',
            fontWeight: 300,
            lineHeight: 1.2,
            fontFamily: 'Lato, sans-serif',
            marginBottom: '1rem',
        },
    },
    rating: {
        '&.MuiRating-root': {
            color: '#72AEC8',
        },
    },
    name: {
        '&.MuiTypography-root': {
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: 1.6,
            textTransform: 'uppercase',
            fontFamily: 'Lato, sans-serif',
            marginTop: '.5rem',
        },
    },
});

export default useStyles;