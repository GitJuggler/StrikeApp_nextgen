// Filename - Form.js

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

	// States for registration
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleName = (e) => {
		setName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handleEmail = (e) => {
		setEmail(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === '' || email === '' || password === '') {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
			window.location.reload()
			axios.post("http://localhost:3001/users", {
				user_name: `${name}`,
				email: `${email}`,
				password: `${password}`
			})
		}

	};

	// Showing success message
	const successMessage = () => {
		return (
			<Box
			
				sx={[{
					display: submitted ? '' : 'none', position: 'absolute', left: '600px'
				}, {color: 'black', width: 'fit-content', height: '50px', padding: '5px',}]}>
				<Typography variant='h4' sx={{position: 'absolute', top: '500px', background:'lightblue', width: '700px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', ml: '20px', borderRadius: '10px'}}>User {name} successfully registered!</Typography>
			</Box>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<Box
				sx={[{
					display: error ? '' : 'none', position: 'absolute', left: '600px'
				}, {color: 'white', width: 'fit-content', height: '50px', padding: '5px',}]}>
				<Typography variant='h4' sx={{position: 'absolute', top: '500px', background:'#ff0011', width: '700px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', ml: '20px', borderRadius: '10px'}}>Please enter all the fields</Typography>
			</Box>
		);
	};

	return (
		<Box sx={{width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
			<Box sx={{width: '100%', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<Typography variant='h3' sx={{fontSize: '24px', fontWeight: '600', color: 'blue'}}>User Registration</Typography>
			</Box>

			{/* Calling to the methods */}
			<Box>
				{errorMessage()}
				{successMessage()}
			</Box>

			<form style={{width: '85%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '20px', gap: '20px'}}>
				{/* Labels and inputs for form data */}
				<TextField onChange={handleName} label='User name'  value={name} type="text" name='user_name' fullWidth/>
				<TextField onChange={handleEmail} label='Email'value={email} type="email" name='email' fullWidth />
				<TextField onChange={handlePassword} label='Password' value={password} type="password" name='password' fullWidth />
				

				<Stack direction={'row'} gap={'10px'}>
					<Button variant='outlined' onClick={handleSubmit} className="btn" type="submit">
						Submit
					</Button>
					<Button variant='contained' sx={{color: 'white'}}>
						<Link to='/login' sx={{color: 'white'}}>
							<Typography variant='h5' sx={{fontSize: '17px', color: 'white'}}>Login</Typography>
						</Link>
					</Button>
				</Stack>
			</form>
		</Box>
	);
}
