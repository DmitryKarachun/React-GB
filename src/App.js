import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import Chats from './Chats';
import Message from './Message';
const App = () => {
  return (
    <Routes>
      <Route path ='/' element={<Chats/>}/>
      <Route path ='/messages/:id' element={<Message/>}/>
    </Routes>
  
  );
};
export default App;