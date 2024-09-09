import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    saleBanner: {
        display: 'flex',
        flexDirection: 'row',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#EDF1F3',
        width: '100%',
        justifyContent: 'center',
        padding: '9.5rem 0',
        marginTop: '3rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1320px',
        width: '100%',
        padding: '4rem 0',
    },
    label: {
        '&.MuiTypography-root': {
            fontSize: '4.5rem',
            fontWeight: 300,
            fontFamily: 'Lato, sans-serif',
            paddingBottom: '3rem',
            lineHeight: 1.2,
            latterSpacing: 0,
        },
    },
    message: {
        '&.MuiTypography-root': {
            fontSize: '1.5rem',
            fontWeight: 500,
            fontFamily: 'Lato, sans-serif',
            marginBottom: '.5rem',
            lineHeight: 1.2,
        },
    },
    link: {
        '&.MuiLink-root': {
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white',
            backgroundColor: '#212529',
            maxWidth: '200px',
            padding: '0.8rem 2.8rem',
        },
    },
});

export default useStyles;