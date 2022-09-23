import React, { useState } from 'react';


const Chatpage = () => {
	const [chats, setChats] = useState([
		{
			id: 1,
			name:'Anrey'
		},
		{
			id: 2,
			name:'Sergey'
		}
	]);
	const [name, setName] = useState('')

	const handleDelete = (id) => {
		const filterValues = chats.filter((item) => item.id !== id)
		setChats(filterValues);
	}

	const addHandler = () => {
		const randomId =Math.random();
		const obj = {
			id: randomId,
			name: name
		}
		setChats(prevState => [...prevState, obj]);
	}
	return (
		<div>
			<input value={name} onChange={(e)=> setName(e.target.value)}/>
			<button onClick={addHandler}>Добавить чат</button>
			{chats.map((chat) => {
				return(
					<div style={{display:'flex'}} key={chat.id}>
						<h4>{chat.name}</h4>
						<button onClick={()=>handleDelete(chat.id)}>x</button>
					</div>
				)
			})}
		</div>
	);
};

export default Chatpage;