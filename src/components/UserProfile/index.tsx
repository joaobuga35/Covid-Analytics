import { SectionStyle, UserFavorite, UserStyle } from "./styles";

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

          {logedUser.img?

           <img  src={logedUser.img} onError={({ currentTarget }) => {
                currentTarget.onerror = null; 
                currentTarget.src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
              }} alt={logedUser.name} title={logedUser.name} /> :  <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"/> }

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
