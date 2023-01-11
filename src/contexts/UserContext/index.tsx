import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/User/api";
import { SubmitHandler } from "react-hook-form";
import {
  iContextProviderProps,
  iLogedUser,
  iLoginData,
  iRegisterData,
  iUserProviderValue,
} from "./types";
import { iDataUserGet } from "../FavoriteContext/type";

export const UserContext = createContext({} as iUserProviderValue);

export function UserContextProvider({ children }: iContextProviderProps) {
  const [logedUser, setLogedUser] = useState({} as iLogedUser);
  const [loading, setLoading] = useState<boolean>(false);
  const [routesLoading, setRoutesLoading] = useState<boolean>(true);
  const [waitFavorite, setWaitFavorite] = useState(false);
  const [favorites, setFavorites] = useState([] as iDataUserGet[] | []);

  const navigate = useNavigate();

  async function userRegisterApi(data: iRegisterData) {
    try {
      setLoading(true);
      await api.post("register", data);
      toast.success("Usuário cadastrado com sucesso!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado com a sua requisição, Tente mais tarde", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  }

  const userLoginApi: SubmitHandler<iLoginData> = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      toast.success("Login realizado com sucesso!", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      FavoriteApiGet()

      if (response.data.accessToken) {
        localStorage.setItem("@TOKEN:", response.data.accessToken);
        localStorage.setItem("@USER_ID:", response.data.user.id);
        navigate("/dashboard");
        setLogedUser(response.data.user);
      } else {
        toast.error(response.data, {
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
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado com a sua requisição, Tente mais tarde", {
        position: "bottom-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function checkUser() {
      const token = localStorage.getItem("@TOKEN:");
      const userID = localStorage.getItem("@USER_ID:");

      if (!token || !userID) {
        setRoutesLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await api.get(`users/${userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setLogedUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setRoutesLoading(false);
      }
    }
    checkUser();
  }, []);

  async function FavoriteApiGet () {
    setWaitFavorite(true)
    const token = localStorage.getItem("@TOKEN:");
    const idUser = localStorage.getItem("@USER_ID:");
      try {
          const resp = await api.get(`favoriteIds?userId=${idUser}`,{
            headers:{
              Authorization: `Bearer ${token}`,  
            }
          });
          setFavorites(resp.data);
          setWaitFavorite(false)
      }
       catch (error) {
          console.error(error);
          setWaitFavorite(false)
      }
  };

  return (
    <UserContext.Provider
      value={{
        userLoginApi,
        userRegisterApi,
        logedUser,
        setLogedUser,
        loading,
        routesLoading,
        FavoriteApiGet,
        waitFavorite, 
        setWaitFavorite,
        favorites,
        setFavorites
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
