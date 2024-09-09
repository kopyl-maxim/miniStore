import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        margin: '0 .5rem 1rem .5rem',
        flex: '0 0 auto',
        width: '25%',
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'start',
        marginRight: '1rem',
        paddingTop: '.5rem',

        '& .MuiSvgIcon-root': {
            fill: '#72AEC8',
            width: '30px',
            height: '30px',
        },
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    label: {
        '&.MuiTypography-root': {
            fontSize: '1.4rem',
            textTransform: 'uppercase',
            marginBottom: '.5rem',
            fontFamily: 'Lato, sans-serif',
        },
    },
    message: {
        '&.MuiTypography-root': {
            fontSize: '1.1rem',
            fontFamily: 'Lato, sans-serif',
            color: '#AEAEAE',
            marginBottom: '1rem',
        },
    },
});

export default useStyles;