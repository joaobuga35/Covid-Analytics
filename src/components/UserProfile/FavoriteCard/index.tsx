import { FavoriteCardStyle } from "./styles";
import {AiOutlineEye} from "react-icons/ai"
import { favCartTypes } from "./interfaces";

// Faltou a key
export function FavoriteCard({name}: favCartTypes) {
  return (
    <FavoriteCardStyle>
      <h3>{name}</h3>
      <button><AiOutlineEye /></button>
    </FavoriteCardStyle>
  );
}
