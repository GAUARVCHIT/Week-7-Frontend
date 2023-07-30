import React, { useState } from 'react';
import { Button, Dialog, DialogContent, DialogTitle, TextField, Typography, styled } from '@mui/material';

// const CustomButton = styled(Button)({
//   backgroundColor: 'white',
//   color: 'black',
//   '&:hover': {
//     backgroundColor: '#e8e8e8',
//   },
// });

const CustomTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInputLabel-outlined': {
        color: 'white',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor: 'white',
        },
    },
    '& .MuiInputBase-input': {
        color: 'white',
    },
});

const Signup: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open Signup Dialog
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth PaperProps={{ style: { backgroundColor: '#121212', color: 'white' } }}>
                <DialogContent style={{ padding: '50px', textAlign: 'center' }}>
                    <Typography align="center">100xDev</Typography>
                    <CustomTextField style={{margin: '50px auto 15px auto'}}
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <CustomTextField style={{margin: '15px auto 30px auto'}}
                        margin="dense"
                        id="password"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button onClick={handleClose} color="primary" variant="contained" fullWidth style={{ color: 'white' }}>
                        Sign up
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Signup;
