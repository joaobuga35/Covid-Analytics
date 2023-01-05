import { RegisterStyled } from "./styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <RegisterStyled>
      <h1 className="titleLoguin">Registro</h1>
      <form className="form">
        <TextField
          id="email"
          label="email"
          variant="filled"
          className="InputForm"
        />
        <TextField
          id="name"
          label="name"
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

        <TextField
          id="confirmPassword"
          label="Confirmação de senha"
          variant="filled"
          className="InputForm"
          type="password"
        />

        <FormControl fullWidth>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            estado
          </InputLabel>
          <NativeSelect
            defaultValue={30}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value="">Selecione seu estado</option>
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Distrito Federal">Distrito Federal</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
          </NativeSelect>
        </FormControl>

        <TextField
          id="image"
          label="Imagem"
          variant="filled"
          className="InputForm"
        />

        <Button variant="contained" className="button">
          Entrar
        </Button>

        <span className="spanQuestion">Não possui conta?</span>

        <Link to="/" className="Link">
          Cadastre-se
        </Link>
      </form>
    </RegisterStyled>
  );
}
