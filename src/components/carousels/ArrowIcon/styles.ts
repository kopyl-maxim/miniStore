import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    arrowIcon: {
        height: '400px',

        // Правильный селектор для применения стиля к path при hover
        '&:hover path': {
            fill: '#72AEC8',
        },
    },
});

export default useStyles;
