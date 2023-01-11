import { ReactNode } from "react";
import { iStates } from "../SearchContext/types";

export interface iChartContext {
  brazilCases: iDataBrazilHandle[];
  findHistoryCasesState: (uf: string) => iDataBrazilHandle[];
  showPopulationState: (uf: string) => number | undefined;
  showPercentagePopulationState: (uf: string) => number | undefined;
  showPercentageProportionalDeathsState: (uf: iStates) => number | undefined;
  showPercentageProportionalCasesState: (uf: iStates) => number | undefined;
}

export interface iChartProvider {
  children: ReactNode;
}

interface iState {
  state: string;
  count: number;
}

export interface iBrazilHistoryData {
  infected: number;
  lastUpdatedAtSource: string;
  infectedByRegion: iState[];
}

export interface iDataBrazilHandle {
  day: string;
  total: number;
  state?: string;
}
