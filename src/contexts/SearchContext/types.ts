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
  percentageDeaths?: number;
  percentageCases?: number;
}

export interface iSearchContext {
  states: iStates[];
  filterList: iStates[];
  setSearch: (search: string) => void;
  valueSearch: () => void;
  filterMap: string;
  findMapImg: (uf: string) => void;
}
