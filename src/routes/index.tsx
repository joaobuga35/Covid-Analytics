import { Routes, Route, Navigate } from "react-router-dom";
import { ChartProvider } from "../contexts/ChartContext";
import { Dashboard } from "../pages/Dashboard";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ProtectedRoutes } from "./protectedRoutes";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <ChartProvider>
              <Dashboard />
            </ChartProvider>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
