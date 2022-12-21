import * as React from 'react';
import logoTristone from '../images/tristone.png'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    const ChangePage = (path) => {
        navigate(path);
    }

    const onDone = (user) => {
        console.log(user)
        if (user) {
            sessionStorage.setItem("user", JSON.stringify(user));
            ChangePage('/Home')
        }
    }
    const URL = 'http://localhost:5000/Program/Login';

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const obj = { 'matricola': data.get('matricola'), 'password': data.get('password') }
        axios.post(URL, obj)
            .then(res => {
                if (onDone !== undefined)
                    onDone(res.data)
            })
            .catch((error) => {
                if (error.request) {
                    console.log('Request Error : ', error.message);
                }
                else {
                    console.log('Error : ', error.message);
                }
            });
    };

    return (
        <Container component='main' maxWidth='xs'>
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={logoTristone} alt='trsitone logo' style={{ width: '100%' }} />
                <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin='normal' required fullWidth id='matricola' label='Matricola' name='matricola' autoFocus />
                    <TextField margin='normal' required fullWidth name='password' label='Password' type='password' id='password' />
                    <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}