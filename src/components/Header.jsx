import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

const Header = () => {
	return (
		<AppBar position="static">
				<Toolbar>
				<IconButton
					color="inherit"
				>
						<HomeIcon></HomeIcon>
					</IconButton>
					<Typography>FirstReacteApp</Typography>
				</Toolbar>
		</AppBar>
	);
};

export default Header;