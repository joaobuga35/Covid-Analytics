import { iDataUserGet } from "../FavoriteContext/types";

export interface iContextProviderProps {
  children: React.ReactNode;
}

export interface iLogedUser {
  email: string;
  id: number;
  img: string;
  name: string;
}

export type iRegisterData = {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirm?: string;
  img?: string | undefined;
};

export interface iLoginData {
  email: string;
  password: string;
}

export interface iUserProviderValue {
  userRegisterApi: (data: iRegisterData | any) => void;
  userLoginApi: (data: iLoginData | any) => void;
  logedUser: iLogedUser;
  setLogedUser: (logedUser: iLogedUser) => void;
  loading: boolean;
  routesLoading: boolean;
  FavoriteApiGet: () => void;
  waitFavorite: boolean;
  setWaitFavorite: (waitFavorite: boolean) => void;
  favorites: iDataUserGet[];
  setFavorites: (favorites: iDataUserGet[]) => void;
  logout: () => void;
}
