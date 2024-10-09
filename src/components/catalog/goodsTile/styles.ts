import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '200px',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    imgContainer: {
        position: 'relative',
        width: 200,
        height: 300,
        overflow: 'hidden',
    }, 
    image: {
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
    },
    linkContainer: {
        position: 'absolute',
        top: '80%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'all 0.3s ease-out',
        zIndex: 999,

        '&:hover': {
            opacity: 1,
            top: '70%',
        },
    },
    linkButton: {
        textDecoration: 'none',
        backgroundColor: '#212529',
        color: 'white',
        border: 'none',
        padding: '0.8rem 2.8rem',
        fontSize: '1.1rem',
        latterSpacing: '2px',
        fontWeight: 400,
        lineHeight: 1.5,
        borderRadius: '.25rem',

        '&:hover': {
            backgroundColor: '#72AEC8',
            color: '#f8f9fa',
        }
    },

    textContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    },
    name: {
        transition: '0.3s color ease-out',
        textDecoration: 'none',
        color: '#212529',
        fontSize: '1.5rem',
        textTransform: 'uppercase',
        fontFamily: 'Lato, sans-serif',
        fontWeight: 500,
        lineHeight: 1.2,

        '&:hover': {
            textDecoration: 'none',
            color: '#72AEC8',

        }
    },
    price: {
        fontSize: '1.5rem',
        color: '#72AEC8',
    },
});

export default useStyles;
