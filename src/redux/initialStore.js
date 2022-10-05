import { applyMiddleware, combineReducers, createStore } from "redux"
import { messageReducer } from "./reducers/messagersReducer/messageReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { chatReducer } from "./reducers/chatReducer/chatReducer";
import { createLogger } from "redux-logger";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

// const time = store => next => action => {
// 	const delay = action?.meta?.delay;
// 	if (!delay) {
// 		return next(action)
// 	} 

// 	const timeout = setTimeout(()=> next(action), delay)

// 	return () => {
// 		clearTimeout(timeout)
// 	}
// }
// const logger = createLogger({
// 	diff: true,
// 	collapsed: true
// })

const persistConfig = {
	key: 'root',
	storage,
}



const reducer = combineReducers({
	chats: chatReducer,
	messages: messageReducer
})

const persisterReducer = persistReducer(persistConfig, reducer)


export const store = createStore(persisterReducer)
export const persist = persistStore(store)