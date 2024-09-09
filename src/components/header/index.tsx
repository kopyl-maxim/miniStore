import React from 'react';
import useStyles from './styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

interface Props {
    // define your props here
}

const Header: React.FC<Props> = () => {
    const classes = useStyles();
    return (
        <Box className={classes.container}>
            <Box className={classes.navbarContainer}>
                <Box>
                    <Link className={classes.navbarBrand} to={'/'}>
                        MiniStore
                        <Box color="#717171">.</Box>
                    </Link>
                </Box>
                <Box className={classes.navbar}>
                    <List className={classes.navbarList}>
                        <ListItem>
                            <Link className={classes.navbarListItem} to={'/shopPage'}>
                                shop
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.navbarListItem} to={'/blogPage'}>
                                blog
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.navbarListItem} to={'/aboutAsPage'}>
                                about
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link className={classes.navbarListItem} to={'/contactPage'}>
                                contact
                            </Link>
                        </ListItem>
                    </List>
                    <List className={classes.navbarIconContainer}>
                        <ListItem className={classes.navbarIcon}>
                            <SearchIcon />
                        </ListItem>
                        <ListItem className={classes.navbarIcon}>
                            <PersonIcon />
                        </ListItem>
                        <ListItem className={classes.navbarIcon}>
                            <ShoppingCartIcon />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
