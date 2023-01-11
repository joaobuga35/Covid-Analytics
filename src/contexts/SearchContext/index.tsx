import { createContext, useEffect, useState } from "react";
import { listMapsUfs } from "../../dataBase/brazilMaps";
import { apiCovid } from "../../services/CovidBr/api";
import { iSearchContext, iSearchProviderProps, iStates } from "./types";

export const SearchContext = createContext<iSearchContext>(
  {} as iSearchContext
);

export function SearchProvider({ children }: iSearchProviderProps) {
  const [states, setStates] = useState([] as iStates[]);
  const [search, setSearch] = useState("" as string);
  const [filterList, setFilterList] = useState([] as iStates[]);

  function findMapImg(uf: string) {
    const currState = listMapsUfs.find(({ state }) => uf === state);
    return currState!.map;
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
        findMapImg,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
