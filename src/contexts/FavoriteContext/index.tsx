import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../services/User/api";
import { SearchContext } from "../SearchContext";
import { iStates } from "../SearchContext/type";
import { iFavoriteContext, iFavoriteProviderProps,iDataUser, iDataUserGet } from "./type";


export const FavoriteContext = createContext<iFavoriteContext>({} as iFavoriteContext);

export function FavoriteProvider({ children }: iFavoriteProviderProps) {
  const {states} = useContext(SearchContext);
  const [favorites, setFavorites] = useState([] as iDataUserGet[] | []);
 
  useEffect(()=>{
    FavoriteApiGet () 
  },[]);

  async function FavoriteApiPost (dataUser: iDataUser) {
    const token = localStorage.getItem("@TOKEN:");
      try {
          const resp = await api.post("/favoriteIds",dataUser,{
            headers:{
              Authorization: `Bearer ${token}`,  
            }
      });
          FavoriteApiGet();
      }
       catch (error) {
          console.error(error);
      }
  };
  
  async function FavoriteApiGet () {
    const token = localStorage.getItem("@TOKEN:");
    const idUser = localStorage.getItem("@USER_ID:");
      try {
          const resp = await api.get(`favoriteIds?userId=${idUser}`,{
            headers:{
              Authorization: `Bearer ${token}`,  
            }
          });
          setFavorites(resp.data);
          
      }
       catch (error) {
          console.error(error);
      }
  };
      
  function searchFavoriteId(id:number ){
    const idUser = localStorage.getItem("@USER_ID:");
    const filter = states.filter((el:iStates) => el.uid===id );
    const {uf,state,cases,deaths,suspects,uid}= filter[0]
    const dataUser ={data:{
      "uid":uid,
      "uf":uf,
      "state":state,
      "cases":cases,
      "deaths": deaths,
      "suspects":suspects
    },
    "userId":Number(idUser)
    }
    FavoriteApiPost(dataUser)
  };
  
  return (
    <FavoriteContext.Provider
      value={{
        searchFavoriteId,
        favorites
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};