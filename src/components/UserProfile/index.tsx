import { SectionStyle, UserFavorite, UserStyle } from "./styles";
import imgExample from "./imgTest.jpg";
import { FavoriteCard } from "./FavoriteCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function UserProfile() {
  const favoriteExampleList = ["Acre", "Roraima", "Paraná", "Amapá", "Bahia"];

  const { logedUser } = useContext(UserContext)

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
          {favoriteExampleList.map((value) => (
            <FavoriteCard key={Math.random()} name={value} />
          ))}
        </ul>
      </UserFavorite>
    </SectionStyle>
  );
}
