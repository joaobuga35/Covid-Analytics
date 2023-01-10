import { useContext } from "react";
import { Brazil } from "../../components/Brazil";
import { ModalFavorite } from "../../components/FavoriteModal";
import { Header } from "../../components/Header";
import { SearchEngine } from "../../components/SearchEngine";
import { UserProfile } from "../../components/UserProfile";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { DashboardStyles } from "./styles";

export function Dashboard() {
  const {openModal} = useContext(FavoriteContext);

  return (
    <DashboardStyles>
      { openModal && <ModalFavorite/> }
      <Header marginTop="8px"/>
      <main>
        <UserProfile />
        <SearchEngine/>
        <Brazil />
      </main>
    </DashboardStyles>
  );
}
