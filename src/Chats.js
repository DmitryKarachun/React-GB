import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import "./App.css";
import { chatGetSelector } from "./redux/reducers/chatGetSelector";
import { messageGetSelector } from "./redux/reducers/messageGetSelector";

function Chats() {
  const messages = useSelector(messageGetSelector);
  const chats = useSelector(chatGetSelector);
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [name, setName] = useState('');

  const addMessage = () => {
    const obj = {
      id: Math.random(),
      title: text,
    };
    dispatch({ type: "ADD_MESSAGE", payload: obj });
    setText("");
  };

  const addChat = () => {
    const obj = {
      id: Math.random(),
      name: name,
    };
    dispatch({type: 'ADD_CHAT', payload: obj})
    setName('')
  }

  const deleteMessage = (id) => {
    dispatch({ type: "DELETE_MESSAGE", payload: id });
  };

  const deleteChats =  (id) => {
    dispatch({type: 'DELETE_CHAT', payload: id,  meta:{
      delay: 3000
    }})
  }



  return (
    <div className="App">
      <div>
        
        <h2>Список чатов:</h2>
        <h3>Добавить чат  </h3>
				<input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={()=>addChat()}>Добавить</button>
        {chats.map((chat) => {
          return <h4 key={chat.id}>
            <Link to={`/messages/${chat.id}`}> {chat.name} </Link>
            <button onClick={()=>deleteChats(chat.id)}>x</button></h4>;
        })}
      </div>



      <div>
        {" "}
        <h2>Сообщения:</h2>
				<input value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={()=>addMessage()}>Добавить</button>
        {messages.map((message) => {				
          return (
            <div key={message.id}>
              <h4>{message.title}</h4>
              <button onClick={() => deleteMessage(message.id)} log>
                Удалить
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chats;
