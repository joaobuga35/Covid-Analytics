import { createContext, ReactNode, useEffect, useState } from "react";
import { apiCovid } from "../../services/CovidBr/api";


export const SearchContext = createContext<iSearchContext>({} as iSearchContext);

interface iSearchProviderProps {
  children: ReactNode;
}

interface iStates {
    uid: number;
	uf: string;
	state: string;
	cases: number;
	deaths: number;
	suspects: number;
}
	
interface iSearchContext {
  setSearch: (search: string) => void;
  filterList: iStates[];
  valueSearch:()=>void;
}

export function SearchProvider({ children }: iSearchProviderProps) {
  
  const [states, setStates] = useState<iStates[]>([]);
  const [search,setSearch]= useState('');
  const [filterList, setFilterList] = useState<iStates[]>([]);
 
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
        setSearch,
        valueSearch,
        filterList
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};