import { ReactNode } from "react";
import { iStates } from "../SearchContext/type";


export interface iFavoriteProviderProps {
  children: ReactNode;
  }

export interface iDataUser {
  userId:number;
  data:iStates;
}
export interface iDataUserGet {
  userId:number;
  data:iStates;
  id: number;
}
      
export interface iFavoriteContext {
  searchFavoriteId: (id:number) => void;
  favorites: iDataUserGet[];
  filterFavorite: (id:number) => void;
  dataModal: iDataUserGet[] | [];
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  deleteFavoriteId: (id:number) => void;
  waitFavorite: boolean;
}