import { SectionStyled, UserFavoriteStyled, UserStyled } from "./styles";
import { Button, CircularProgress } from "@mui/material";
import { FavoriteCard } from "../FavoriteCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ImSad } from "react-icons/im";

export function UserProfile() {
  const { favorites, waitFavorite, logedUser, logout } = useContext(UserContext);
  const photoUserDefault = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

  return (
    <SectionStyled>
      <UserStyled>
        <div>
          {logedUser.img ? (
            <img
              src={logedUser.img}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src =
                photoUserDefault;
              }}
              alt={logedUser.name}
              title={logedUser.name}
            />
          ) : (
            <img
              src={photoUserDefault}
              alt="foto de perfil padrão"
            />
          )}
        </div>
        <h2>{logedUser.name}</h2>
        <Button variant="contained" onClick={() => logout()}>
          Logout
        </Button>
      </UserStyled>
      <UserFavoriteStyled>
        <h2>Favoritos</h2>
        {waitFavorite ? (
          <CircularProgress color="info" />
        ) : (
          <ul>
            { 
            favorites.length?
              favorites.map((el) => (
              <FavoriteCard
                key={Math.random()}
                name={el.data.state}
                id={el.data.uid}
              />
              )) :
              <p>Você não adicionou nenhum favorito! <br/><ImSad/> </p>
            }
          </ul>
        )}
      </UserFavoriteStyled>
    </SectionStyled>
  );
};
