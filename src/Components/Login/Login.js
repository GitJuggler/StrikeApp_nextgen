import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      alert("Success")
    } else {
      console.error('ERROR');
    }
};
  return (
    <Box sx={{width: '100%', position: 'relative'}}>
      <Container sx={{width: 'xl', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px'}}>
        <Typography variant='h2' sx={{color:'blue',fontWeight: '600', fontSize: '19px'}}>LogIn Page</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: 'auto'}}>
            <TextField name='email'  variant='outlined' fullWidth type="email" label="Email" />
            <TextField name='password' label="Password" type="password" variant="outlined" fullWidth />
            <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
        </Box>
          
      </Container>  
    </Box>
  )
}
