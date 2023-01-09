import { SectionStyle, UserFavorite, UserStyle } from "./styles";
import imgExample from "./imgTest.jpg";
import { FavoriteCard } from "./FavoriteCard";

export function UserProfile() {
  const favoriteExampleList = ["Acre", "Roraima", "Paraná", "Amapá", "Bahia"];

  return (
    <SectionStyle>
      <UserStyle>
        <div>
          <img src={imgExample} alt="name example" title="name example" />
        </div>
        <h2>name example</h2>
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
