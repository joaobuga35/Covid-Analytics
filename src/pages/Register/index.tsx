import { BodyStyled, RegisterStyled } from "./styles";
import {
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./schema";
import { SubmitHandler } from "react-hook-form";
import { iRegisterData } from "../../contexts/UserContext/types";
import { Loader } from "../../components/Loader";
import { brazilStates } from "../../dataBase/brazilStates";

export function Register() {
  const { userRegisterApi, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const submitRegisterFunction: SubmitHandler<iRegisterData> = async (data) => {
    const formatedData = {
      email: data!.email,
      name: data!.name,
      password: data!.password,
      img: data!.img
    };
    await userRegisterApi(formatedData);
  };

  return (
    <RegisterStyled>
      <BodyStyled/>
      {loading && <Loader />}
      <Header colorTitle="var(--white)" marginTop="1rem" />
      <h2>Registro</h2>
      <form onSubmit={handleSubmit(submitRegisterFunction)}>
        <TextField
          id="email"
          label="email"
          variant="filled"
          error={errors.email ? true : false}
          helperText={errors.email && `${errors.email?.message}`}
          {...register("email")}
        />
        <TextField
          id="name"
          label="name"
          variant="filled"
          error={errors.name ? true : false}
          helperText={errors.name && `${errors.name?.message}`}
          {...register("name")}
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
        <TextField
          id="confirmPassword"
          label="Confirmação de senha"
          variant="filled"
          type="password"
          error={errors.passwordConfirm ? true : false}
          helperText={
            errors.passwordConfirm && `${errors.passwordConfirm?.message}`
          }
          {...register("passwordConfirm")}
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
            {...register("state")}
          >
            {brazilStates.map((ele, index) => (
              <option key={index} value={ele.uf}>
                {ele.nome}
              </option>
            ))}
          </NativeSelect>
        </FormControl>
        <TextField
          id="image"
          label="Imagem"
          variant="filled"
          error={errors.img ? true : false}
          helperText={errors.img && `${errors.img?.message}`}
          {...register("img")}
        />
        <Button variant="contained" type="submit">
          Cadastre-se
        </Button>
        <span>Já possui conta?</span>
        <Link to="/login">Acessar</Link>
      </form>
    </RegisterStyled>
  );
};
