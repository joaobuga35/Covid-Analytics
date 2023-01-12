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
    .required("A senha é obrigatória")
    .min(6, 'Sua senha precisa ter no mínimo 6 caracteres')
    .matches(/(?=.*?[0-9])/, 'É necessário um número')
    .matches(/(?=.*?[A-Z])/, 'É necessária uma letra maiúscula')
    .matches(/(?=.*?[a-z])/, 'É necessária uma letra minúscula')
    .matches(/(?=.*?[#?!@$%^&*-])/, 'É necessário um caractere especial'),
  passwordConfirm: yup
    .string()
    .required("Digite sua senha novamente")
    .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  img: yup
    .string()
    
});
