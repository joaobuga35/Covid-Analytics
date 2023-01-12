import { createContext, useEffect, useState } from "react";
import { api } from "../../services/User/api";
import { iStates } from "../SearchContext/types";
import {
  iBrazilHistoryData,
  iChartContext,
  iChartProvider,
  iDataBrazilHandle,
  iStatePopulation,
} from "./types";

export const ChartContext = createContext<iChartContext>({} as iChartContext);

export function ChartProvider({ children }: iChartProvider) {
  const [dataBrazil, setDataBrazil] = useState([] as iBrazilHistoryData[]);
  const [brazilCases, setBrazilCases] = useState([] as iDataBrazilHandle[]);
  const [brazilPopulation, setBrazilPopulation] = useState([] as iStatePopulation[]);

  async function getBrazilHistoryData() {
    try {
      const resp = await api.get("/listBrazilHistoryCases");
      setDataBrazil(resp.data);
      setBrazilCases(showHistoryCasesBrazil(resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBrazilHistoryData();
    getPopulationData();
  }, []);

  function showHistoryCasesBrazil(data: iBrazilHistoryData[]) {
    let currDay = "";
    let counter = 0;
    const historyCases: Array<iDataBrazilHandle> = [];
    data.forEach((el) => {
      let day = el.lastUpdatedAtSource.substring(0, 10);
      counter++;
      if (currDay !== day && counter === 70) {
        currDay = day;
        let obj = { day: day, total: el.infected };
        historyCases.push(obj);
      }
      if (counter === 70) {
        counter = 0;
      }
    });
    return historyCases;
  }

  function findHistoryCasesState(uf: string) {
    let currDay = "";
    const historyCases: Array<iDataBrazilHandle> = [];
    let counter = 0;
    dataBrazil.forEach((el) => {
      let day = el.lastUpdatedAtSource.substring(0, 10);
      counter++;
      if (currDay !== day && counter === 60) {
        currDay = day;
        const currState = el.infectedByRegion.find(({ state }) => uf === state);
        if (currState) {
          let obj = {
            state: currState.state,
            day: day,
            total: currState.count,
          };
          historyCases.push(obj);
        }
      }
      if (counter === 60) {
        counter = 0;
      }
    });
    return historyCases;
  }

  async function getPopulationData() {
    try {
      const resp = await api.get("/listBrazilDataPopulation");
      setBrazilPopulation(resp.data);
    } catch(error) {
      console.error(error);
    } 
  }
  

  function showPopulationState(uf: string) {
    const currState = brazilPopulation.find(({ state }) => state === uf);
    return currState?.population;
  }

  function showPercentagePopulationState(uf: string) {
    const currState = brazilPopulation.find(({ state }) => state === uf);
    return currState?.percentagePopulation;
  }

  function showPercentageProportionalDeathsState(state: iStates) {
    const totalPopulation = showPopulationState(state.uf);
    const { deaths } = state;
    if (totalPopulation) {
      const percentage = (deaths * 100) / totalPopulation;
      return percentage;
    }
  }

  function showPercentageProportionalCasesState(state: iStates) {
    const totalPopulation = showPopulationState(state.uf);
    const { cases } = state;
    if (totalPopulation) {
      const percentage = (cases * 100) / totalPopulation;
      return percentage;
    }
  }

  return (
    <ChartContext.Provider
      value={{
        brazilCases,
        showPopulationState,
        findHistoryCasesState,
        showPercentagePopulationState,
        showPercentageProportionalDeathsState,
        showPercentageProportionalCasesState,
      }}
    >
      {children}
    </ChartContext.Provider>
  );
}
