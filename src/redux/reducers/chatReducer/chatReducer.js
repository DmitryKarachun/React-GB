const initialState = {
	chats: [
		{
			id: 1,
			name: 'Dmitry'
		},
		{
			id: 2,
			name: 'Natallia'
		}
	]

}

export const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DELETE_CHAT':
			return {
				...state,
				chats: state.chats.filter((item) => item.id !== action.payload)
			}
			case 'ADD_CHAT':
			return {
				...state,
				chats: [...state.chats, action.payload]
			}
			
		
	
		default:
			return state
		
	}

}