import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box, Button, Grid, Typography } from '@mui/material'

type Props = {
    handleSignInOpen: () => void;
    handleSignUpOpen: () => void;
};

const HomePageAppbar: React.FC<Props> = ({ handleSignInOpen, handleSignUpOpen }) => {

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
                            <Button color="inherit" onClick={handleSignInOpen}>Sign In</Button>
                            <Button color="inherit" onClick={handleSignUpOpen}>Sign Up</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HomePageAppbar;