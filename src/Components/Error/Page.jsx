import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Page = () => {
  return (
    <Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Typography variant='h1'>Oops...</Typography> 
        
        <Typography variant='h1'>Smth went wroongg</Typography>

        <Link to='/'><Button variant='outlined'>Main Page</Button></Link>
    </Box>
  )
}
