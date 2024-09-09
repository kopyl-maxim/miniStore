import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    instaPost: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingBottom: '7rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1320px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: '.5rem',
    },
    label: {
        '&.MuiTypography-root': {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '2rem',
            textTransform: 'uppercase',
            marginBottom: '1rem',
        },
    },
});

export default useStyles;