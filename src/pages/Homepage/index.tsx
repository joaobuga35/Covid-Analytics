import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { HomepageStyled } from "./styles";

export function Homepage() {
  return (
    <HomepageStyled>
      <Header colorTitle="white" />
      <div>
        <p>
          Navegue e se notifique dos dados sobre o coronavírus (COVID-19) e
          monitore algum estado ou país de sua escolha de forma transparente e
          analítica.
        </p>
        <div>
          <div>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Registro</Link>
          </div>
          <Link to={"/dashboard"}>Conhecer o site</Link>
        </div>
      </div>
    </HomepageStyled>
  );
}
