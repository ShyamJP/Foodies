import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import axios from "axios"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <NavLink color="inherit" to="/">
        Foodies
      </NavLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const defaultTheme = createTheme();
const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()
    const submitHandeler = (event) => {
        event.preventDefault()
        axios.post("http://localhost:3001/login", { email, password })
            .then(result => {
                // console.log(result) //show login user data for test
                if (result.data.user.email === email) {
                    localStorage.setItem("name", result.data.user.name)
                    localStorage.setItem("email", result.data.user.email)
                    localStorage.setItem("id", result.data.user._id)
                    navigate("/home")
                }
            })
            .catch(err => console.log(err))
    }
    return (
        <>
        <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitHandeler}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
            {/* <div>
                <div>
                    <h2>Login</h2>
                    <form onSubmit={submitHandeler}>
                        <div>
                            <TextField id="outlined-basic" label="E-mail" variant="outlined" />
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                            />
                    
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type="email" placeholder="Enter Name" autoComplete="off" name="email"
                                onChange={(e) => setemail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input type="password" placeholder="Enter Password" name="password"
                                onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <button type="sumbit">Login</button>
                        <p>Create New saccount</p>
                        <Link to="/register">Signup</Link>
                    </form>
                </div>
            </div> */}
        </>
    )
}

export default Login;