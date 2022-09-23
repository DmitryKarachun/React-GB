import { useState } from "react";
import { useEffect } from "react";
import Header from "./components/Header";
import List from "./components/List";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import {createTheme, TextField, ThemeProvider, Typography } from "@mui/material";
import "./styles/App.css";
import { green, purple } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  const [messageList, setMessageList] = useState([]);
  const [autor, setAutor] = useState("");
  const [message, setMessage] = useState("");
  const [chatList] = useState([
    {name: 'Some chat1', id: '1'},
    {name: 'Some chat2', id: '2'},
    {name: 'Some chat3', id: '3'},
  ]);
  

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      autor,
      message,
    };
    if (autor.length > 0) {
      setMessageList([...messageList, newPost]);
      setAutor("");
      setMessage("");
    } else {
      alert('Необходимо внести имя автора');
    }
  };

  useEffect(() => {
    if (messageList.length >0) {
      
    }
    setTimeout(() => {
      botAnswer(messageList);
    },1500)
  }, [messageList]);

  function botAnswer() {
    const lastAutor = messageList[messageList.length - 1];
    if (lastAutor && lastAutor.autor) {
      // setMessageList(prev => [...messageList, {
      //   message: `Cообщение автора ${lastAutor.autor} отправлено `    
      // }]);
      alert(lastAutor.autor+ ', твоё сообщение отправлено');
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Header></Header>
    <div className="App">
      <form noValidate autoComplete="off"  className="form">

        <MyInput      
          label="Имя"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}       
        />
        <MyInput
          multiline
          rows ={4}
          label="Сообщение"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Отправить</MyButton>

      </form>
      <hr style={{margin:'20px 0px'}}/>
      <div className="messageList">
        <div className="chat">
          <Typography  variant="h5" components='div' color='primary' >Список чатов</Typography>
          <List sx={{}} chatList={chatList}>
          </List>
        </div>
      <PostList messageList={messageList} />
      </div>

    </div>

    </ThemeProvider>
  );
}

export default App;
