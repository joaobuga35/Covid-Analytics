export interface iContextProviderProps{
  children: React.ReactNode;
};

export interface iLogedUser{
  email: string,
  id: number,
  img: string,
  name: string,
  state: string,
}

export type iRegisterData = {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
  state?: string;
  img?: string;
};

export interface iLoginData{
  email: string;
  password: string;
};



export interface iUserProviderValue{
  // submitRegisterFunction: (data: iRegisterData | any) => void,
  userRegisterApi: (data: iRegisterData | any) => void,
  userLoginApi: (data: iLoginData | any) => void,
  logedUser: iLogedUser,
  setLogedUser: (logedUser: iLogedUser) => void,
};