import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    mainContainer: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        paddingBottom: '7rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1320px',
    },
    postContainer: {
        paddingLeft: '4rem',
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '2rem',

    },
    massage: {
        fontSize: '1.2rem',
        color: '#AEAEAE',
        paddingBottom: '2rem',
        marginTop: 0,
    },
    link: {
        padding: '0.8rem 2.8rem',
        fontSize: '1.1rem',
        latterSpacing: '2px',
        borderRadius: 0,
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: 'white',
        backgroundColor: '#212529',
        borderColor: '#212529',

        '&:focus': {
            color: 'white',
            backgroundColor: '#1c1f23',
            borderColor: '#1c1f23',
            boxShadow: '0 0 0 .25rem rgba(66,70,73,.5)',
        },
    },
});

export default useStyles;