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
    states: iStates[];
    filterList: iStates[];
    setSearch: (search: string) => void;
    valueSearch: () => void;
    findMapImg: (uf: string) => string | undefined;
    states: iStates[];
    
  }