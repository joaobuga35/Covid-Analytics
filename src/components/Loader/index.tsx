import { CircularProgress } from "@mui/material";
import { DivLoader } from "./styles";

export function Loader() {
  return (
    <DivLoader>
      <CircularProgress size={125}></CircularProgress>
      <h1>Loading...</h1>
    </DivLoader>
  );
}
