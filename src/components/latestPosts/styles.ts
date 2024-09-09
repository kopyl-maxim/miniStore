import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    latestPosts: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '7rem 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '1320px',
    },
    labelContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
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
            padding: '0.8rem 2.8rem',
            fontSize: '1.1rem',
            letterSpacing: '2px',
            color: '#212529',
            textTransform: 'uppercase',
            fontWeight: 400,
            fontFamily: 'Lato, sans-serif',
        },
    },
    postCardContainer: {
        display: 'flex',
        maxWidth: '1320px',
        width: '100%',
    },
});

export default useStyles;