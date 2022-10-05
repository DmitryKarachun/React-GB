import { GET_USERS_ERROR, GET_USERS_LOADING } from "./actionTypes"

export const loadStart = () => (
	{
		type: GET_USERS_LOADING
	}
)

export const errorUsers = (error) => (
	{
		type: GET_USERS_ERROR,
		payload: error.toString()
 }
)