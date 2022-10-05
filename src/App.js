import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers} from './redux/usersReducer/usersReducer'

function App() {
  const users = useSelector(state => state.users)
  const loading = useSelector(state => state.loading)
  const error = useSelector(state => state.error)
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getUsers())
  },[])

  const restart = () => {
    dispatch(getUsers())
  }
 
  if (loading) {
    return (
      <div>Идет загрузка...</div>
    )
  }

  if (error) {
    return (
      <div>Ошибка..
        <button onClick={restart}></button>
      </div>
    )
  }
  return (
    <div className="App">
      <div>
        {users.map((user) => {
          return (
          <div key={user.id}>{user.name} EMAIL:{user.email}</div>
        )})}
      </div>
    </div>
  );
}

export default App;
