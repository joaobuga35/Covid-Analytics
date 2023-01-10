import { FavoriteCardStyle } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { iFavCartTypes } from "./types";
import { Button } from "@mui/material";
import { useContext } from "react";
import { FavoriteContext } from "../../../contexts/FavoriteContext";

// Faltou a key
export function FavoriteCard({ key,name,id }: iFavCartTypes) {
  const { filterFavorite } = useContext(FavoriteContext);

  return (
    <FavoriteCardStyle key={key}>
      <h3>{name}</h3>
      <Button variant="contained" aria-label="olhar conteúdo" size="small" className="ola" onClick={()=>filterFavorite(id)}>
      <AiOutlineEye />
      </Button>
    </FavoriteCardStyle>
  );
}