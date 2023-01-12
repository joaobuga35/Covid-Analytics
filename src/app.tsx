import { GlobalStyle } from "./styles/global";
import { UserContextProvider } from "./contexts/UserContext";
import { RoutesMain } from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SearchProvider } from "./contexts/SearchContext";
import { FavoriteProvider } from "./contexts/FavoriteContext";

export function App() {
  return (
    <>
      <GlobalStyle />
      <UserContextProvider>
        <SearchProvider>
          <FavoriteProvider>
            <RoutesMain />
          </FavoriteProvider>
        </SearchProvider>
      </UserContextProvider>
      <ToastContainer />
    </>
  );
}
