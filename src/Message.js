import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { messageGetSelector } from './redux/reducers/messageGetSelector';

const Message = () => {
	const { id } = useParams();
	console.log({id});
	
	const messages = useSelector(messageGetSelector);

	const message = messages.filter((item) => {
		if (!id) return true;
		return item.chatId === Number(id)
	} );
	console.log(message);
	
	return (
		<div>
			Сообщения:
			{message.map((item)=> {
				return (
					<h5 key={item.id}>{item.title}</h5>
				)
			})}
		</div>
	);
};

export default Message;