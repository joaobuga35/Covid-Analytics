import { FavoriteCardStyle } from "./styles";
import { AiOutlineEye } from "react-icons/ai";
import { iFavCartTypes } from "./types";

// Faltou a key
export function FavoriteCard({ name }: iFavCartTypes) {
  return (
    <FavoriteCardStyle>
      <h3>{name}</h3>
      <button>
        <AiOutlineEye />
      </button>
    </FavoriteCardStyle>
  );
}
