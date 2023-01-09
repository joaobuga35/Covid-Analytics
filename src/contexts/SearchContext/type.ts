import { ReactNode } from "react";

export interface iSearchProviderProps {
    children: ReactNode;
  }
  
  export interface iStates {
      uid: number;
      uf: string;
      state: string;
      cases: number;
      deaths: number;
      suspects: number;
  }
      
  export interface iSearchContext {
    setSearch: (search: string) => void;
    filterList: iStates[];
    valueSearch: () => void;
    findMapImg: (uf: string) => string | undefined;
  }