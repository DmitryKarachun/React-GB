import { errorUsers, loadStart } from "../action";
import { GET_USERS } from "../actionTypes";
import { GET_USERS_ERROR } from "../actionTypes";
import { GET_USERS_LOADING } from "../actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: null,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(loadStart());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.log(error.toString());

      dispatch(errorUsers());
    }
  };
};
