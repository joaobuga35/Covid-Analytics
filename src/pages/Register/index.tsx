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
import { Header } from "../../components/Header"

export function Register() {
  const brazilStates = [
    { uf: "AC", nome: "Acre" },
    { uf: "AL", nome: "Alagoas" },
    { uf: "AP", nome: "Amapá" },
    { uf: "AM", nome: "Amazonas" },
    { uf: "BA", nome: "Bahia" },
    { uf: "CE", nome: "Ceará" },
    { uf: "DF", nome: "Distrito Federal" },
    { uf: "ES", nome: "Espirito Santo" },
    { uf: "GO", nome: "Goiás" },
    { uf: "MA", nome: "Maranhão" },
    { uf: "MS", nome: "Mato Grosso do Sul" },
    { uf: "MT", nome: "Mato Grosso" },
    { uf: "MG", nome: "Minas Gerais" },
    { uf: "PA", nome: "Pará" },
    { uf: "PB", nome: "Paraíba" },
    { uf: "PR", nome: "Paraná" },
    { uf: "PE", nome: "Pernambuco" },
    { uf: "PI", nome: "Piauí" },
    { uf: "RJ", nome: "Rio de Janeiro" },
    { uf: "RN", nome: "Rio Grande do Norte" },
    { uf: "RS", nome: "Rio Grande do Sul" },
    { uf: "RO", nome: "Rondônia" },
    { uf: "RR", nome: "Roraima" },
    { uf: "SC", nome: "Santa Catarina" },
    { uf: "SP", nome: "São Paulo" },
    { uf: "SE", nome: "Sergipe" },
    { uf: "TO", nome: "Tocantins" },
  ];

  return (
    <RegisterStyled>
      <Header colorTitle="--white" marginTop="1rem"/>
      <h1>Registro</h1>
      <form>
        <TextField id="email" label="email" variant="filled" />
        <TextField id="name" label="name" variant="filled" />

        <TextField
          id="password"
          label="senha"
          variant="filled"
          type="password"
        />

        <TextField
          id="confirmPassword"
          label="Confirmação de senha"
          variant="filled"
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
            {brazilStates.map((ele) => (
              <option value={ele.uf}>{ele.nome}</option>
            ))}
          </NativeSelect>
        </FormControl>

        <TextField id="image" label="Imagem" variant="filled" />

        <Button variant="contained">Cadastre-se</Button>

        <span>Já possui conta?</span>

        <Link to="/">Entrar</Link>
      </form>
    </RegisterStyled>
  );
}
