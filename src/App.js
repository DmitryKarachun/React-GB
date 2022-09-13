import { useState } from "react";
import { useEffect } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [messageList, setMessageList] = useState([]);
  const [autor, setAutor] = useState("");
  const [message, setMessage] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      autor,
      message,
    };
    
    setMessageList([...messageList, newPost]);
    setAutor("");
    setMessage("");
  };

  useEffect(() => {
    setTimeout(() => {
      botAnswer(messageList);
    },1500)
  }, [messageList]);

  function botAnswer() {
    const lastAutor = messageList[messageList.length - 1];
    if (lastAutor && lastAutor.autor) {
      setMessageList(prev => [...messageList, {
        message: `Cообщение автора ${lastAutor.autor} отправлено `    
      }]);
    }
  }

  return (
    <div className="App">
      <form  className="form">
        <MyInput
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Имя"
        />
        <MyInput
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Сообщение"
        />
        <MyButton onClick={addNewPost}>Отправить</MyButton>
      </form>
      <PostList messageList={messageList} />
    </div>
  );
}

export default App;
