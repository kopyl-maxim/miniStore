import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'block',
        width: '100%',
    },
    carousel: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    carouselItemContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#EDF1F3',
        height: '600px',
        width: '100%',
    },
    carouselItem: {
        display: 'flex',
        maxWidth: '1200px',
        width: '100%',
    },
    slideButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
    },
    slideText: {
        '&.MuiTypography-root': {
            fontSize: '4.5rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 300,
            lineHeight: 1.2,
            textTransform: 'uppercase',
        },
        paddingBottom: '3rem',
    },
    slideButton: {
        '&.MuiButton-root': {
            color: 'white',
            borderRadius: '0',
            fontSize: '1.1em',
            backgroundColor: '#212529',
            padding: '0.8rem 2.8rem',
            latterSpacing: '2px',
            textTransform: 'uppercase',
        },
        '&.MuiButton-root:hover': {
            backgroundColor: '#72AEC8',
        },
    },
    slideImgContainer: {
        display: 'flex',
    },
});

export default useStyles;