import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    subscribeForm: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        margin: '7rem 0',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212529',
        maxWidth: '1366px',
        width: '100%',
        padding: '4rem 0',
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        width: '50%',
    },
    label: {
        '&.MuiTypography-root': {
            color: 'white',
            fontSize: '2rem',
            fontWeight: 500,
            fontFamily: 'Lato, sans-serif',
            marginBottom: '.5rem',
        },
    },
    massage: {
        '&.MuiTypography-root': {
            color: '#AEAEAE',
            fontSize: '1.2rem',
            fontWeight: 500,
            fontFamily: 'Lato, sans-serif',
            marginBottom: '1rem',
            lineHeight: 1.6,
        },
    },
    formContainer: {
        display: 'flex',
        flex: '0 0 auto',
        width: '42%',
    },
    input: {
        '& .MuiOutlinedInput-input': {
            backgroundColor: 'white',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',
            fontSize: '1rem',
            color: '#212529',
            height: '100%',
        },
        position: 'relative',
        flex: '1 1 auto',
        width: '100%',
    },
    button: {
        '&.MuiButton-root': {
            backgroundColor: '#72AEC8',
            color: 'white',
            fontSize: '1.1rem',
            padding: '0.8rem 2.8rem',
            fontFamily: 'Lato, sans-serif',
            letterSpacing: '2px',
            borderRadius: 0,
            border: 'none',
        },
        '&.MuiButton-root:hover': {
            backgroundColor: '#212529',
            boxShadow: 'none',
        },
    },
});

export default useStyles;