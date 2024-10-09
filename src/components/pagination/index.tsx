import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import ArrowIcon from '../carousels/ArrowIcon';

interface Props {
    totalPage: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ totalPage, currentPage, onPageChange }) => {
    const classes = useStyles();

    const generatePages = () => {
        const pages = [];

        if (totalPage <= 7) {
            for (let i = 1; i <= totalPage; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);
            if (currentPage > 3) {
                pages.push('...');
            }
            const startPage = Math.max(2, currentPage - 1);
            const endPage = Math.min(totalPage - 1, currentPage + 1);

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            if (currentPage < totalPage - 3) {
                pages.push('...');
            }

            pages.push(totalPage);
        }

        return pages;
    };

    const pages = generatePages();

    return (
        <Box className={classes.container}>
            <ArrowIcon direction={'left'} size={'1rem'}/>
            {pages.map((page, index) => (
                <Box
                    key={index}
                    className={classes.paginationLink}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                >
                    {page}
                </Box>
            ))}
            <ArrowIcon direction={'right'} size={'1rem'}/>
        </Box>
    );
};

export default Pagination;
