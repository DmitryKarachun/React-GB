import { TextField } from '@mui/material';
import React from 'react';
import cl from './MyInput.module.css';

const MyInput = ({children, ...props}) => {
	return (
		<TextField
			autoFocus='true'
			margin="normal"
			color="primary"
			fullWidth
			type="text" {...props} />
	);
};

export default MyInput;