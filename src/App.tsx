import { GlobalStyle } from "./styles/global";
import { UserContextProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export function App() {
  return (
    <>
      <GlobalStyle/>
      
      <UserContextProvider >
        <RoutesMain />
      </UserContextProvider>


      <ToastContainer/>
    </>
  );
}
