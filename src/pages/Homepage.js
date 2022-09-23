import { Typography } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom'

const Homepage = () => {
	return (
		<>
	
				<Typography variant='h6'><Link to='/chat'>Чат</Link></Typography>
				<Typography variant='h6'><Link to='/profile'>Профиль</Link></Typography>
		</>
	);
};

export default Homepage;