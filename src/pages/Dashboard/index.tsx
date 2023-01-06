import { Brazil } from "../../components/Brazil";
import { ListCard } from "../../components/CardsList";
import { Header } from "../../components/Header";
import { StyledSearch } from "../../components/SearchEngine/styles";
import { UserProfile } from "../../components/UserProfile";
import { DashboardStyles } from "./styles";

export function Dashboard() {
  return (
    <DashboardStyles>
      <Header marginTop="8px"/>
      <main>
        <UserProfile />
        <ListCard />
        <Brazil />
      </main>
    </DashboardStyles>
  );
}
