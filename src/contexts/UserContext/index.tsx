import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/User/api";
import { iContextProviderProps, iLogedUser, iLoginData, iRegisterData, iUserProviderValue } from "./types";
import { SubmitHandler } from "react-hook-form";

export const UserContext = createContext({} as iUserProviderValue);

export function UserContextProvider({ children }: iContextProviderProps) {
  const [logedUser, setLogedUser] = useState({} as iLogedUser);
  const navigate = useNavigate();

  async function userRegisterApi(data: iRegisterData){
    try {
      console.log("Cheguei aqui 2");
      await api.post("register", data);
      console.log("Cheguei aqui 3");
      
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
      console.log("Cheguei aqui 4");
      navigate("/login");
      console.log("Cheguei aqui 5");
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
    }
  }


  const userLoginApi: SubmitHandler<iLoginData> = async (data) => {

    console.log("Cheguei aqui 0");
    try {
      console.log("Cheguei aqui 1");
      const response = await api.post("login", data);
      
      console.log("Cheguei aqui 2");
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

      if (response.data.accessToken) {
        localStorage.setItem("@TOKEN:", response.data.accessToken);
        navigate("/dashboard");
        setLogedUser(response.data.user)

        console.log("Cheguei aqui 3");
        console.log(response.data);
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
    }
  }

  return (
    <UserContext.Provider value={{ userLoginApi, userRegisterApi, logedUser, setLogedUser }} >
      {children}
    </UserContext.Provider>
  );
}
