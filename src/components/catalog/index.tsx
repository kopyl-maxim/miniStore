import React, { useState } from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import Pagination from '../pagination';


interface Props {
    // define your props here
}

const Catalog: React.FC<Props> = () => {
    const classes = useStyles();
    const [test, setTest] = useState(1);
    return (
        <Box className={classes.container}>
            <Pagination
                totalPage={67}
                currentPage={test}
                onPageChange={(page) => setTest(page)}
            />
        </Box>
    );
};

export default Catalog;
