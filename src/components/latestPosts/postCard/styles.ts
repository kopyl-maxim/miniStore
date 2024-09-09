import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    postCard: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginRight: '1rem',
    },
    imgContainer: {
        display: 'flex',


        '& img': {
            flex: '0 0 auto',
            width: '100%',
            height: 'auto',
            borderRadius: '.25rem',
            border: '1px solid rgba(0,0,0,.125)',
        },
    },
    infoContainer: {
        padding: '1rem',
    },
    dateInfo: {
        '&.MuiTypography-root': {
            color: '#6c757d',
            fontSize: '0.875rem',
        },
    },
    labelLink: {
        '&.MuiLink-root': {
            color: '#212529',
            textDecoration: 'none',
            transition: '0.3s color ease-out',
            fontSize: '1.2rem',
        },
        '&.MuiLink-root:hover': {
            color: '#72AEC8',
        },
    },
});

export default useStyles;