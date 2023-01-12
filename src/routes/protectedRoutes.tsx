import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export function ProtectedRoutes() {
  const { routesLoading, logedUser } = useContext(UserContext);

  if (routesLoading) {
    return null;
  }

  return logedUser?.id ? <Outlet /> : <Navigate to={"/login"} replace={true} />;
}
