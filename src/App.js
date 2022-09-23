import "./styles/App.css";
import { Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Chatpage from "./pages/Chatpage";
import Notfoundpage from "./pages/Notfoundpage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="profile" element={<Profilepage />} />
        <Route path="chat" element={<Chatpage />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>

  )
};

export default App;
