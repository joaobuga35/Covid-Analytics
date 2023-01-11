import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brazil } from "../../components/Brazil";
import { Header } from "../../components/Header";
import { SearchEngine } from "../../components/SearchEngine";
import { UserProfile } from "../../components/UserProfile";
import { DashboardStyles } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { ModalFavorite } from "../../components/FavoriteModal";
import { ModalBrazil } from "../../components/BrazilModal/";

export function Dashboard() {
  const navigate = useNavigate();
  const { logedUser } = useContext(UserContext);
  const { openModal } = useContext(FavoriteContext);
  const [brModal, setBrModal] = useState(false);

  useEffect(() => {
    if (!logedUser.id) {
      navigate("/login");
    }
  }, []);

  return (
      <DashboardStyles>
        {openModal && <ModalFavorite />}
        {brModal && <ModalBrazil setOpen={setBrModal}/>}
        <Header marginTop="8px" />
        <main>
          <UserProfile />
          <SearchEngine />
          <Brazil setOpen={setBrModal}/>
        </main>
      </DashboardStyles>
  );
}
