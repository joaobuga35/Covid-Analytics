import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export function RoutesMain() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
}
