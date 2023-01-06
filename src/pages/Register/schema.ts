import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido.")
    .required("O email é obrigatório"),
  name: yup
    .string()
    .required("O nome é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória"),
  passwordConfirm: yup
    .string()
    .required("Digite sua senha novamente")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  state: yup
    .string(),
  img: yup
    .string()
    .required("A imagem é obrigatória"),
});
