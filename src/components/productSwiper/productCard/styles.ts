import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    productCard: {
        display: 'flex',
        width: '100%',
        position: 'relative', // Это нужно для абсолютного позиционирования кнопки
        '&:hover $linkButton': { // Селектор для изменения стиля кнопки при ховере на productCard
            opacity: 1,
            top: '80%',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        position: 'relative',
    },
    linkButton: {
        display: 'flex',
        transition: 'all 0.3s ease-out',
        textTransform: 'uppercase',
        cursor: 'pointer',
        alignItems: 'center',
        justifyContent: 'center',

        '&.MuiLink-root': {
            width: '45%',
            color: 'white',
            fontSize: '0.85rem',
            backgroundColor: '#212529',
            border: 'none',
            padding: '0.8rem 2.8rem',
            textDecoration: 'none',
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: '0',
            fontFamily: 'Lato, sans-serif',
        },
        '& .MuiSvgIcon-root': {
            marginLeft: '0.5rem',
        },
        '&.MuiLink-root:hover': {
            backgroundColor: '#72AEC8',
        },
    },
    massageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1rem',
    },
    name: {
        '&.MuiLink-root': {
            fontSize: '1.5rem',
            textDecoration: 'none',
            color: 'black',
            textTransform: 'uppercase',
            fontFamily: 'Lato, sans-serif',
            transition: 'all 0.3s ease-out',
        },
        '&.MuiLink-root:hover': {
            color: '#72AEC8',
        },
    },
    price: {
        '&.MuiTypography-root': {
            fontSize: '1.5em',
            color: '#72AEC8',
            fontFamily: 'Lato, sans-serif',
        },
    },
});

export default useStyles;
