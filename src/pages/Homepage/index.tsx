import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { HomePageStyled } from "./styles";

export function Homepage() {
  return (
    <HomePageStyled>
      <Header colorTitle="white" />
      <div>
        <p>
          Navegue e se notifique dos dados sobre o coronavírus (COVID-19) e
          monitore algum estado ou país de sua escolha de forma transparente e
          analítica.
        </p>
        <div>
          <div>
            <Link to={"/login"}>
               <Button variant="contained">Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button variant="contained">Registro</Button>
            </Link>
          </div>
        </div>
      </div>
    </HomePageStyled>
  );
}
