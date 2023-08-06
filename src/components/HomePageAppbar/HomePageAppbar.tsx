import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Box, Button, Grid, Typography, IconButton, Menu, MenuItem, ListItemIcon } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'; // This is the user icon

interface IauthenticatedUser {
    userName: string;
}

type Props = {
    handleSignInOpen: () => void;
    handleSignUpOpen: () => void;
    isLoggedIn: boolean;
    authenticatedUser: IauthenticatedUser;
    handleLogOut: () => void;
};

const HomePageAppbar: React.FC<Props> = ({ handleSignInOpen, handleSignUpOpen, isLoggedIn, authenticatedUser, handleLogOut }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleMenuOpen = () => {
        setMenuOpen(true);
    };

    const handleMenuClose = () => {

        setMenuOpen(false);
    };

    const logoutMenuClose = () => {
        // I want to erase the token from the local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userName');
        handleLogOut();
        setMenuOpen(false);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: "#2a2a2a" }}>
                <Toolbar>
                    <Grid container justifyContent="space-between">
                        <Typography variant="h6" component="div">
                            100xDev
                        </Typography>
                        <Grid item>
                            <Button color="inherit">Courses</Button>
                            <Button color="inherit">Blog</Button>
                            {!isLoggedIn && <Button color="inherit" onClick={handleSignInOpen}>Sign In</Button>}
                            {!isLoggedIn && <Button color="inherit" onClick={handleSignUpOpen}>Sign Up</Button>}
                            {isLoggedIn && <IconButton
                                color="inherit"
                                ref={anchorRef}
                                onClick={handleMenuOpen}
                            >
                                <AccountCircle />
                                <Typography variant="body1" style={{ marginLeft: '8px' }}>
                                {authenticatedUser.userName}
                                </Typography>
                            </IconButton>}
                            {isLoggedIn && <Menu
                                anchorEl={anchorRef.current}
                                open={menuOpen}
                                onClose={handleMenuClose}
                            >
                                <MenuItem onClick={handleMenuClose}>My Account</MenuItem>
                                <MenuItem onClick={handleMenuClose}>My Purchases</MenuItem>
                                <MenuItem onClick={logoutMenuClose}>Log Out</MenuItem>
                            </Menu>}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HomePageAppbar;
