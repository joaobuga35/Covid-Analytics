
import { GlobalStyle } from "./styles/global";
import { UserContextProvider } from "./contexts/UserContext"
import { RoutesMain } from "./routes";
import { ToastContainer } from "react-toastify"

export function App() {
  return (
    <>
      <GlobalStyle/>
      
      <UserContextProvider >
        <RoutesMain />
      </UserContextProvider>

      <ToastContainer />
    </>
  );
}
