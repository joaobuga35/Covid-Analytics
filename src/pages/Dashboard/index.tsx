import { Brazil } from "../../components/Brazil";
import { Header } from "../../components/Header";
import { SearchEngine } from "../../components/SearchEngine";
import { UserProfile } from "../../components/UserProfile";
import { DashboardStyles } from "./styles";

export function Dashboard() {
  return (
    <DashboardStyles>
      <Header marginTop="8px"/>
      <main>
        <UserProfile />
        <SearchEngine/>
        <Brazil />
      </main>
    </DashboardStyles>
  );
}
