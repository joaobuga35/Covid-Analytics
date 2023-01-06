export interface iContextProviderProps{
  children: React.ReactNode;
};

export type iRegisterData = {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
  state?: {
    uf: string;
    nome: string;
  };
  img?: string;
};

export interface iLoginData{
  email: string;
  password: string;
};

export interface iUserProviderValue{
  // submitRegisterFunction: (data: iRegisterData | any) => void,
  userRegisterApi: (data: iRegisterData | any) => void,
  submitLoginFunction: (data: iLoginData | any) => void,
};