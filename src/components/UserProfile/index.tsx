import { SectionStyle, UserFavoriteStyled, UserStyle } from "./styles";
import { CircularProgress } from "@mui/material";
import { FavoriteCard } from "./FavoriteCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";


export function UserProfile() {
  const { favorites,waitFavorite } = useContext(FavoriteContext);
  const { logedUser } = useContext(UserContext)

  return (
    <SectionStyle>
      <UserStyle>
        <div>
          <img src={logedUser.img} alt={logedUser.name} title={logedUser.name} />
        </div>
        <h2>{logedUser.name}</h2>
      </UserStyle>
      <UserFavoriteStyled>
        <h2>Favoritos</h2>
        {waitFavorite? <CircularProgress color="info" /> :
        <ul>
          {favorites.map((el) => (
            <FavoriteCard key={Math.random()} name={el.data.state} id={el.data.uid} />
          ))}
        </ul>}
      </UserFavoriteStyled>
    </SectionStyle>
  );
}
