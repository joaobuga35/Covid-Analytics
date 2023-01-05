import { Login } from "./pages/Login";
import { GlobalStyle } from "./styles/global";
import { Routes, Route  } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
       <Route path="/login" element={<Login/>} />
      </Routes>
      <GlobalStyle/>
    </>
  );
}

export default App;
