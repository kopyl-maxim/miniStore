import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#EDF1F3',
        padding: '5rem 0',
    },
    label: {
        color: '#212529',
        textTransform: 'uppercase',
        fontSize: '4.5rem',
        fontWeight: 300,
        lineHeight: 1.2,
        fontFamily: 'Lato, sans-serif',
        marginBottom: '1rem'
    },
    pathText: {
        fontFamily: 'Lato, sans-serif',
        fontSize: '0.8rem'
    }
});

export default useStyles;