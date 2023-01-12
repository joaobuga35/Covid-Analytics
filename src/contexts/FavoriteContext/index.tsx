import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/User/api";
import { SearchContext } from "../SearchContext";
import { iStates } from "../SearchContext/types";
import { UserContext } from "../UserContext";
import {
  iFavoriteContext,
  iFavoriteProviderProps,
  iDataUser,
  iDataUserGet,
} from "./types";

export const FavoriteContext = createContext<iFavoriteContext>(
  {} as iFavoriteContext
);

export function FavoriteProvider({ children }: iFavoriteProviderProps) {
  const { states,findMapImg } = useContext(SearchContext);
  const { FavoriteApiGet, favorites, setWaitFavorite } =
    useContext(UserContext);

  const [openModal, setOpenModal] = useState(false as boolean);
  const [dataModal, setDataModal] = useState([] as iDataUserGet[] | []);

  const token = localStorage.getItem("@TOKEN:");
  useEffect(() => {
    FavoriteApiGet();
  }, [token]);

  async function FavoriteApiPost(dataUser: iDataUser) {
    setWaitFavorite(true);
    const token = localStorage.getItem("@TOKEN:");
    try {
      const resp = await api.post("/favoriteIds", dataUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      FavoriteApiGet();
    } catch (error) {
      console.error(error);
      setWaitFavorite(false);
    }
  }

  function searchFavoriteId(id: number) {
    setWaitFavorite(true);
    const idUser = localStorage.getItem("@USER_ID:");
    const filter = states.find((el: iStates) => el.uid == id);
    if (filter) {
      const { uf, state, cases, deaths, suspects, uid } = filter;
      const dataUser = {
        data: {
          uid: uid,
          uf: uf,
          state: state,
          cases: cases,
          deaths: deaths,
          suspects: suspects,
        },
        userId: Number(idUser),
      };
      const verification = favorites.find((el) => {
        return el.data.uid == uid;
      });
      if (!verification) {
        FavoriteApiPost(dataUser);
      } else {
        setWaitFavorite(false);
        toast.error("Estado já favoritado!", {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  }

  function filterFavorite(id: number) {
    const filter = favorites.filter((el) => el.data.uid == id);
    setDataModal(filter)
    findMapImg(filter[0].data.uf);
    setOpenModal(true);
  }

  async function deleteFavoriteId(id: number) {
    const token = localStorage.getItem("@TOKEN:");
    try {
      const resp = await api.delete(`favoriteIds/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      FavoriteApiGet();
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <FavoriteContext.Provider
      value={{
        searchFavoriteId,
        favorites,
        filterFavorite,
        dataModal,
        openModal,
        setOpenModal,
        deleteFavoriteId,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}
