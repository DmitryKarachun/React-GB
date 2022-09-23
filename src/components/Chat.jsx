import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';

const Chat = ({name, secondary}) => {
	return (
		<div>
			<ListItem>
				<ListItemButton>
					<ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
					<ListItemText   primary={name}
                    secondary={secondary ? 'Secondary text' : null}></ListItemText>
				</ListItemButton>
			</ListItem>
		</div>
	);
};

export default Chat;