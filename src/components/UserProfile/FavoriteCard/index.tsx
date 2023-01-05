import { FavoriteCardStyle } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { iFavCartTypes } from "./types";
import { IconButton } from "@mui/material";

// Faltou a key
export function FavoriteCard({ name }: iFavCartTypes) {
  return (
    <FavoriteCardStyle>
      <h3>{name}</h3>
      <IconButton color="primary" aria-label="olhar conteúdo" size="small">
        <AiOutlineEye />
      </IconButton>
    </FavoriteCardStyle>
  );
}