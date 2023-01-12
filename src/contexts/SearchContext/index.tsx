import { createContext, useEffect, useState } from "react";
import { apiCovid } from "../../services/CovidBr/api";
import { api } from "../../services/User/api";
import { iSearchContext, iSearchProviderProps, iStates } from "./types";

export const SearchContext = createContext<iSearchContext>(
  {} as iSearchContext
);

export function SearchProvider({ children }: iSearchProviderProps) {
  const [states, setStates] = useState([] as iStates[]);
  const [search, setSearch] = useState("" as string);
  const [filterList, setFilterList] = useState([] as iStates[]);
  const [filterMap, setfilterMap] = useState("" as string);

  async function findMapImg(uf: string) {
    try {
      const resp = await api.get(`listMapsUfs?state=${uf}`)
      console.log(resp)
      const currState:string = resp!.data[0]!.map
      setfilterMap(currState)
    } catch (error) {
      console.error(error);
    }
  }
  
  async function getApi() {
    try {
      const resp = await apiCovid.get("/api/report/v1");
      setStates(resp.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getApi();
  }, []);

  function valueSearch() {
    const filter = states.filter(
      (el: iStates) =>
        el.state.toLowerCase().includes(search) ||
        el.uf.toLowerCase().includes(search)
    );
    setFilterList(filter);
  }

  return (
    <SearchContext.Provider
      value={{
        states,
        setSearch,
        valueSearch,
        filterList,
        filterMap,
        findMapImg
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
