import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footerBottom: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: '1rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1320px',
        width: '100%',
    },
    textContainer: {
        display: 'flex',
    },
    text: {
        '&.MuiTypography-root': {
            fontSize: '1.2rem',
            color: '#AEAEAE',
            fontFamily: 'Lato, sans-serif',
            marginRight: '.5rem',
        },
    },
    img: {
        padding: '0 .25rem',
    },
});

export default useStyles;