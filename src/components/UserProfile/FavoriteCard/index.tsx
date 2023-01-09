import { FavoriteCardStyle } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { iFavCartTypes } from "./types";
import { Button } from "@mui/material";

// Faltou a key
export function FavoriteCard({ name }: iFavCartTypes) {
  return (
    <FavoriteCardStyle>
      <h3>{name}</h3>
      <Button variant="contained" aria-label="olhar conteúdo" size="small" className="ola">
      <AiOutlineEye />
      </Button>
    </FavoriteCardStyle>
  );
}