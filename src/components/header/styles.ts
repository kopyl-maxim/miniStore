import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '90px',
        backgroundColor: 'white',
    },
    navbarContainer: {
        display: 'flex',
        padding: '.5rem 1rem .5rem 1rem',
        marginBottom: '1rem',
        justifyContent: 'space-between',
        width: '100%',
    },
    navbarBrand: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '.75rem',
        paddingLeft: '.75rem',
        fontSize: '30px',
        textDecoration: 'none',
        color: 'rgba(0, 0, 0, 0.87)',
    },
    navbar: {
        display: 'flex',
        alignItems: 'center',
    },
    navbarList: {
        display: 'flex',
        alignItems: 'center',
    },
    navbarListItem: {
        '&.MuiListItem-root': {
            margin: '0 1.5rem 0 0',
            padding: '.5rem',
        },
        textDecoration: 'none',
        fontFamily: 'Lato, sans-serif',
        textTransform: 'uppercase',
        display: 'flex',
        cursor: 'pointer',
        color: '#717171',
        transition: 'color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out',
        '&:hover': {
            color: '#72AEC8',
        },
    },
    navbarIconContainer: {
        display: 'flex',
        alignItems: 'center',
        '&.MuiList-root': {
            margin: '0',
            padding: '0',
            marginLeft: '3rem',
        },
    },
    navbarIcon: {
        '&.MuiListItem-root': {
            margin: '0',
            padding: '0',
            paddingRight: '1rem',
        },
    },
});

export default useStyles;