import { CircularProgress } from "@mui/material";
import { DivLoaderStyled } from "./styles";

export function Loader() {
  return (
    <DivLoaderStyled>
      <CircularProgress size={125}></CircularProgress>
      <h1>Loading...</h1>
    </DivLoaderStyled>
  );
}
