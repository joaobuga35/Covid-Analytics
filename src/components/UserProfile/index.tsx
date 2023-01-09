import { SectionStyle, UserFavorite, UserStyle } from "./styles";
import imgExample from "./imgTest.jpg";
import { FavoriteCard } from "./FavoriteCard";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";

export function UserProfile() {
  const{ favorites } = useContext(FavoriteContext)
  console.log(favorites)
  return (
    <SectionStyle>
      <UserStyle>
        <div>
          <img src={logedUser.img} alt={logedUser.name} title={logedUser.name} />
        </div>
        <h2>{logedUser.name}</h2>
      </UserStyle>
      <UserFavorite>
        <h2>Favoritos</h2>
        <ul>
          {favorites.map((el) => (
            <FavoriteCard key={Math.random()} name={el.data.state} />
          ))}
        </ul>
      </UserFavorite>
    </SectionStyle>
  );
}
