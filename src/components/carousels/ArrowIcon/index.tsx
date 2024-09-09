import React from 'react';
import useStyles from './styles';

interface ArrowIconProps {
    direction: 'left' | 'right';
    fill?: string;
    onClick?: () => void;
    size: string,
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ size, direction, fill, onClick }) => {
    const classes = useStyles({ size });
    // Path data for the arrows
    const leftPathData = 'M79.393,154.389l150-149.996c5.857-5.858,15.355-5.858,21.213,0.001c5.857,5.858,5.857,15.355-0.001,21.213l-139.393,139.39l139.393,139.394c5.857,5.858,5.857,15.355,0.001,21.213c-2.929,2.93-7.678,4.394-10.606,4.394s-7.678-1.464-10.607-4.394l-149.999-150.004 c-2.814-2.813-4.394-6.628-4.394-10.606S76.579,157.202,79.393,154.389z';

    const rightPathData = 'M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606C255,161.018,253.42,157.202,250.606,154.389z';

    // Choose path data based on direction
    const pathData = direction === 'left' ? leftPathData : rightPathData;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 330 330"
            style={{ width: size }}
            className={classes.arrowIcon}
            onClick={onClick}
        >
            <path fill={fill} d={pathData} />
        </svg>
    );
};

export default ArrowIcon;
