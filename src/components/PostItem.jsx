import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const PostItem = (props) => {
	return (
		<div >
          <Card sx={{minWidth:275}} className="post__content">
						<CardContent sx={{pading:'20px'}}>
							{props.post.autor && <Typography variant='h5' color='primary'> Автор: {props.post.autor}</Typography>}
							{ props.post.autor && <Typography variant='body2'>  Сообщение: </Typography>}	{props.post.message}
							</CardContent>
					</Card>
          {/* <MyButton>Удалить пост</MyButton> */}
    </div>
		
	);
};

export default PostItem;