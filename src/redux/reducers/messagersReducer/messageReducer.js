const initialState = {
	messages: [
		{
			id:1,
			title: 'Hello world 1',
			chatId:1,
		},
		{
			id:2,
			title: 'Hello world 2',
			chatId: 2,
		},
	],
}
export const messageReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_MESSAGE':
			return {
				...state,
				messages: [...state.messages, action.payload]
			}
			case 'DELETE_MESSAGE':
				return {
					...state,
					messages: state.messages.filter((item)=> item.id !== action.payload)
				}
		
	
		default: 
			return state
	}
}