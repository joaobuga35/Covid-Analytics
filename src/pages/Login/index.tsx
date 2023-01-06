import { LoginStyled } from "./styles";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { loginFormSchema } from "./schema";



export function Login() {

  const { userLoginApi } = useContext(UserContext)

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(loginFormSchema),
  })

  return (
    <LoginStyled>
      <Header colorTitle="--white" marginTop="1rem" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit(userLoginApi)}>
        <TextField 
          id="email" 
          label="email" 
          variant="filled"
          error={errors.email ? true : false}
          helperText={errors.email && `${errors.email?.message}`}
          {...register("email")}  
        />

        <TextField
          id="password"
          label="senha"
          variant="filled"
          type="password"
          error={errors.password ? true : false}
          helperText={errors.password && `${errors.password?.message}`}
          {...register("password")}
        />

        <Button variant="contained" type="submit">Entrar</Button>
        <span>Não possui conta?</span>
        <Link to="/register">Cadastre-se</Link>
      </form>
    </LoginStyled>
  );
}
