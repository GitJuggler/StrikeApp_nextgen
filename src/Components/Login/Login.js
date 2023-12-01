import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export const Login = () => {
  return (
    <Box sx={{width: '100%', position: 'relative'}}>
      <Container sx={{width: 'xl', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant='h2' sx={{color:'blue',fontWeight: '600', fontSize: '19px'}}>LogIn Page</Typography>

          
      </Container>  
    </Box>
  )
}
