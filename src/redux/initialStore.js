import { combineReducers, createStore } from "redux"
import { messageReducer } from "./reducers/messagersReducer/messageReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { chatReducer } from "./reducers/chatReducer/chatReducer"

const reducer = combineReducers({
	chats: chatReducer,
	messages: messageReducer
})
export const store = createStore(reducer, composeWithDevTools())