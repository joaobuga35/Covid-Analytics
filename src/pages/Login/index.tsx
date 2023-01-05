import { LoginStyled } from "./styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";


export function Login() {
  return (
    <LoginStyled>
      <Header colorTitle="--white" marginTop="1rem" />
      <h1>Login</h1>
      <form>
        <TextField id="email" label="email" variant="filled" />

        <TextField
          id="password"
          label="senha"
          variant="filled"
          type="password"
        />

        <Button variant="contained">Entrar</Button>
        <span>Não possui conta?</span>
        <Link to="/">Cadastre-se</Link>
      </form>
    </LoginStyled>
  );
}
