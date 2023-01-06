import React, { createContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import { iContextProviderProps, iLoginData, iRegisterData, iUserProviderValue } from "./types";
import { SubmitHandler } from "react-hook-form";

export const UserContext = createContext({} as iUserProviderValue);

export function UserContextProvider({ children }: iContextProviderProps) {
  const navigate = useNavigate();

  // async function submitRegisterFunction: SubmitHandler<iRegisterData>(data: iRegisterData) {

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



  // async function submitLoginFunction(data: iLoginData) {

  const submitLoginFunction: SubmitHandler<iLoginData> = async (data) => {

    console.log("Cheguei aqui 0");
    try {
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

      if (response.data.accessToken) {
        localStorage.setItem("@TOKEN:", response.data.accessToken);
        navigate("/dashboard");
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
    <UserContext.Provider value={{ submitLoginFunction, userRegisterApi }} >
      {children}
    </UserContext.Provider>
  );
}
