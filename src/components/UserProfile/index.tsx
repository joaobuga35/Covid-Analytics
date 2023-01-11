import { SectionStyle, UserFavoriteStyled, UserStyle } from "./styles";
import { Button, CircularProgress } from "@mui/material";
import { FavoriteCard } from "../FavoriteCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";


export function UserProfile() {
  const { favorites,waitFavorite,logedUser,logout } = useContext(UserContext);

  return (
    <SectionStyle>
      <UserStyle>
        <div>
          {logedUser.img ? (
            <img
              src={logedUser.img}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
              }}
              alt={logedUser.name}
              title={logedUser.name}
            />
          ) : (
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
          )}
        </div>
        <h2>{logedUser.name}</h2>
        <Button variant="contained" onClick={()=>logout()}>Logout</Button>
      </UserStyle>
      <UserFavoriteStyled>
        <h2>Favoritos</h2>
        {waitFavorite ? (
          <CircularProgress color="info" />
        ) : (
          <ul>
            {favorites.map((el) => (
              <FavoriteCard
                key={Math.random()}
                name={el.data.state}
                id={el.data.uid}
              />
            ))}
          </ul>
        )}
      </UserFavoriteStyled>
    </SectionStyle>
  );
}
