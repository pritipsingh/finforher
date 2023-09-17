import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Dashbord from "./pages/Dashbord";
// import Login from "./pages/Login";
import Register from "./Pages/Register";
import Main from "./Pages/Main";
import Plans from "./Pages/Plans";
import Mutuals from "./Pages/Mutuals";

import Chat from "./Pages/Chat";
// import Chat from "./pages/Chat";

function App() {
  return (
    <>
      <Router>

        <Routes>


          <Route path="/" element={<Register />} />
          <Route path="/auth" element={<Main />} />
          <Route path='/schemes' element={<Plans />} />
          <Route path='/investments' element={<Mutuals />} />
          <Route path='/chat' element={<Chat />} />

        </Routes>

      </Router>
    </>
  );
}

export default App;