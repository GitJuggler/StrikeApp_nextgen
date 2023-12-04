import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import axios from "axios";



export const Navbar = () => {
    const [dataInfo, setDataInfo] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }


    useEffect(()=>{
        if(dataInfo.length <= 0){
            axios.get('http://localhost:3001/users').then(res=>setDataInfo(res.data));
        }
    },[dataInfo])
      
  return (
    <Box sx={{width: "100%", height: "100px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative",}}>
        <Box sx={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px'}}>
            <Link to='/' sx={{display: 'flex'}}>
                <Typography variant="h3" sx={{fontSize: '20px', cursor: 'pointer', fontWeight: '600', color: 'blue'}}>Striker application</Typography>
            </Link>
            <Chip label="Nextgen" sx={{color: 'blue', border: '1px solid blue', ml: '20px'}} variant="outlined" />
        </Box>
        <Box sx={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '50px', gap: '20px'}}>
            {dataInfo.length === 0 ? 
            <Box sx={{width: '50%', height: '100'}}><Button variant="outlined"><Link to='/login' >Login</Link></Button><Button variant="contained"><Link to='/register'>Register</Link></Button></Box> : 
            <Box sx={{width: '50%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined}onClick={handleClick} sx={{gap: '20px'}}><Avatar> {dataInfo.length === 0 ? " " : localStorage.getItem('user_name')[0]}</Avatar>{dataInfo.length === 0 ? " " : localStorage.getItem('user_name')}</Button><Menu id="basic-menu"anchorEl={anchorEl}open={open}onClose={handleClose}MenuListProps={{'aria-labelledby': 'basic-button',}}><MenuItem onClick={handleClose}>Profile</MenuItem><MenuItem onClick={handleClose}>My account</MenuItem><MenuItem onClick={handleClose}>Logout</MenuItem></Menu></Box>
            }

        </Box>
    </Box>
  );
};
