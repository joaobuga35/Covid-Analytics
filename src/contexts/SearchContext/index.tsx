import { createContext, useEffect, useState } from "react";
import { apiCovid } from "../../services/CovidBr/api";
import { iSearchContext, iSearchProviderProps, iStates } from "./type";


export const SearchContext = createContext<iSearchContext>({} as iSearchContext);

export function SearchProvider({ children }: iSearchProviderProps) {
  
  const [states, setStates] = useState<iStates[]>([]);
  const [search,setSearch]= useState('');
  const [filterList, setFilterList] = useState<iStates[]>([]);
 
  const listMapsUfs = Object.freeze([
    { state: "AC", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ac.svg" },
    { state: "AL", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/al.svg" },
    { state: "AP", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ap.svg" },
    { state: "AM", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/am.svg" },
    { state: "BA", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ba.svg" },
    { state: "CE", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ce.svg" },
    { state: "DF", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/df.svg" },
    { state: "ES", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/es.svg" },
    { state: "GO", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/go.svg" },
    { state: "MA", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ma.svg" },
    { state: "MT", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/mt.svg" },
    { state: "MS", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ms.svg" },
    { state: "MG", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/mg.svg" },
    { state: "PA", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/pa.svg" },
    { state: "PB", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/pb.svg" },
    { state: "PR", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/pr.svg" },
    { state: "PE", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/pe.svg" },
    { state: "PI", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/pi.svg" },
    { state: "RJ", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/rj.svg" },
    { state: "RN", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/rn.svg" },
    { state: "RS", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/rs.svg" },
    { state: "RO", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/ro.svg" },
    { state: "RR", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/rr.svg" },
    { state: "SC", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/sc.svg" },
    { state: "SP", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/sp.svg" },
    { state: "SE", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/se.svg" },
    { state: "TO", map: "https://kenzie-academy-brasil-developers.github.io/mapsstates/to.svg" },
  ]);

  function findMapImg(uf: string) {
      const currState = listMapsUfs.find(({state}) => uf === state);
      return currState?.map;
  }

  useEffect(()=>{
    async function getApi () {
        try {
            const resp = await apiCovid.get("/api/report/v1");
            setStates(resp.data.data);
        }
         catch (error) {
            console.error(error);
        }
      };
      getApi ();

  },[]);
    
  function valueSearch(){
    const filter = states.filter((el:iStates) => el.state.toLowerCase().includes(search) || el.uf.toLowerCase().includes(search) );
    setFilterList(filter);
  };

  return (
    <SearchContext.Provider
      value={{
        states,
        setSearch,
        valueSearch,
        filterList,
        findMapImg
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};