import { LoginStyled } from "./styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <LoginStyled>
      <h1 className="titleLoguin">Login</h1>
      <form className="form">
        
        <TextField
          id="email"
          label="email"
          variant="filled"
          className="InputForm"
        />

        <TextField
          id="password"
          label="senha"
          variant="filled"
          className="InputForm"
          type="password"
        />

        <Button variant="contained" className="button">
          Entrar
        </Button>
        <span className="spanQuestion">Não possui conta?</span>
        <Link to="/" className="Link">
          Cadastre-se
        </Link>
      </form>
    </LoginStyled>
  );
}
