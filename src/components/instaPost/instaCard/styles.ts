import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    instaCard: {
        display: 'flex',
        width: '20%',
    },
    link: {
        display: 'flex',
        position: 'relative',
    },
    img: {
        display: 'flex',
        width: '100%',

    },
    iconOverlay: {
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: '0.9s ease-out',
        zIndex: 999,

        '& .MuiSvgIcon-root': {
            height: '60px',
            width: '60px',
            fill: '#f8f9fa',
        },

        '&:hover': {
            opacity: 1,
            top: '50%', /* This is no longer necessary */
        },
    },

});

export default useStyles;