import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '1320px',
        width: '100%',
        justifyContent: 'space-between',
    },
    linkContainer: {
        flex: '0 0 auto',
        width: '25%',
        padding: '0 .5rem 1rem',
    },
    mainLabel: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '30px',
    },
    mainMassage: {
        '&.MuiTypography-root': {
            fontSize: '1.1em',
            color: '#AEAEAE',
            fontFamily: 'Lato, sans-serif',
            marginBottom: '1rem',
        },
    },
    socialLinkContainer: {
        '& .MuiSvgIcon-root': {
            marginRight: '1.875rem',
            fill: '#AEAEAE',
            cursor: 'pointer',
            width: '30px',
            height: '30px',
        },
        '& .MuiSvgIcon-root:hover': {
            marginRight: '1.875rem',
            fill: '#72AEC8',
        },
    },
    quickLinkContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 auto',
        width: '15%',

    },
    label: {
        '&.MuiTypography-root': {
            marginBottom: '.5rem',
            fontSize: '1.25rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 500,
            lineHeight: 1.2,
        },
    },
    linkList: {
        '& .MuiListItem-root': {
            margin: 0,
            padding: 0,
            paddingBottom: '.5rem',
            fontSize: '1rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 500,
            lineHeight: 1.2,
            transition: '0.3s color ease-out',
            cursor: 'pointer',
        },
        '& .MuiListItem-root:hover': {
            color: '#72AEC8',
        },
    },
    infoContainer: {
        flex: '0 0 auto',
        width: '22%',
    },
    contactContainer: {
        flex: '0 0 auto',
        width: '25%',
    },
    contactMassage: {
        '&.MuiTypography-root': {
            fontSize: '1.1em',
            color: '#AEAEAE',
            fontFamily: 'Lato, sans-serif',
        },
    },
    contactInfo: {
        '&.MuiTypography-root': {
            fontSize: '1.2rem',
            fontFamily: 'Lato, sans-serif',
            fontWeight: 500,
            lineHeight: 1.2,
            transition: '0.3s color ease-out',
            cursor: 'pointer',
        },
        '&.MuiTypography-root:hover': {
            color: '#72AEC8',
        },
    },
    contactMassageContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
    },
    underline: {
        height: '1px',
        width: '100%',
        backgroundColor: '#AEAEAE',
        margin: '1rem 0',
    },
});

export default useStyles;