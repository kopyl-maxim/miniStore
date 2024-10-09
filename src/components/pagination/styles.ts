import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationLink: {
        display: 'flex',
        cursor: 'pointer',
        fontSize: '1.4rem',
        color: '#AEAEAE',
        margin: '0.1rem',

        '&:hover': {
            color: '#72AEC8',
        }
    }
});

export default useStyles;
