import { Button } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';


const MyButton = ({children, ...props}) => {
	return (
		<Button variant="outlined" endIcon={<SendIcon />} {...props} >
			{children}
		</Button>
	);
};

export default MyButton;