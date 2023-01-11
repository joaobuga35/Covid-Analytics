import { createContext, useEffect, useState } from "react";
import { apiCovidHistory } from "../../services/CovidHistory/api";
import { iStates } from "../SearchContext/types";
import {
  iBrazilHistoryData,
  iChartContext,
  iChartProvider,
  iDataBrazilHandle,
} from "./types";

export const ChartContext = createContext<iChartContext>({} as iChartContext);

export function ChartProvider({ children }: iChartProvider) {
  const [dataBrazil, setDataBrazil] = useState([] as iBrazilHistoryData[]);
  const [brazilCases, setBrazilCases] = useState([] as iDataBrazilHandle[]);

  async function getBrazilHistoryData() {
    try {
      const resp = await apiCovidHistory.get("/data");
      setDataBrazil(resp.data);
      setBrazilCases(showHistoryCasesBrazil(resp.data));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBrazilHistoryData();
  }, []);

  function showHistoryCasesBrazil(data: iBrazilHistoryData[]) {
    console.log("passei");
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

  const listBrazilData = Object.freeze([
    {
      state: "AC",
      population: 829780,
      percentagePopulation: 0.4,
    },
    {
      state: "AL",
      population: 3125254,
      percentagePopulation: 1.5,
    },
    {
      state: "AP",
      population: 774268,
      percentagePopulation: 0.4,
    },
    {
      state: "AM",
      population: 3952262,
      percentagePopulation: 1.9,
    },
    {
      state: "BA",
      population: 14659023,
      percentagePopulation: 7.1,
    },
    {
      state: "CE",
      population: 8936431,
      percentagePopulation: 4.3,
    },
    {
      state: "DF",
      population: 2923369,
      percentagePopulation: 1.4,
    },
    {
      state: "ES",
      population: 4108508,
      percentagePopulation: 1.9,
    },
    {
      state: "GO",
      population: 6950976,
      percentagePopulation: 3.3,
    },
    {
      state: "MA",
      population: 6800605,
      percentagePopulation: 3.3,
    },
    {
      state: "MT",
      population: 3784239,
      percentagePopulation: 1.8,
    },
    {
      state: "MS",
      population: 2833742,
      percentagePopulation: 1.4,
    },
    {
      state: "MG",
      population: 20732660,
      percentagePopulation: 10.0,
    },
    {
      state: "PA",
      population: 8442962,
      percentagePopulation: 4.1,
    },
    {
      state: "PB",
      population: 4030961,
      percentagePopulation: 1.9,
    },
    {
      state: "PR",
      population: 11835379,
      percentagePopulation: 5.7,
    },
    {
      state: "PE",
      population: 9051113,
      percentagePopulation: 4.4,
    },
    {
      state: "PI",
      population: 3270174,
      percentagePopulation: 1.6,
    },
    {
      state: "RJ",
      population: 16615526,
      percentagePopulation: 8.0,
    },
    {
      state: "RN",
      population: 3303953,
      percentagePopulation: 1.6,
    },
    {
      state: "RS",
      population: 11088065,
      percentagePopulation: 5.3,
    },
    {
      state: "RO",
      population: 1616379,
      percentagePopulation: 0.8,
    },
    {
      state: "RR",
      population: 634805,
      percentagePopulation: 0.3,
    },
    {
      state: "SC",
      population: 7762154,
      percentagePopulation: 3.7,
    },
    {
      state: "SP",
      population: 46024937,
      percentagePopulation: 22.2,
    },
    {
      state: "SE",
      population: 2211868,
      percentagePopulation: 1.1,
    },
    {
      state: "TO",
      population: 1584306,
      percentagePopulation: 0.8,
    },
  ]);

  function showPopulationState(uf: string) {
    const currState = listBrazilData.find(({ state }) => state === uf);
    return currState?.population;
  }

  function showPercentagePopulationState(uf: string) {
    const currState = listBrazilData.find(({ state }) => state === uf);
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
