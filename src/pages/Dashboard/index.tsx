import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { Brazil } from "../../components/Brazil";
import { Header } from "../../components/Header";
import { SearchEngine } from "../../components/SearchEngine";
import { UserProfile } from "../../components/UserProfile";
import { DashboardStyles } from "./styles";
import { UserContext } from "../../contexts/UserContext";

export function Dashboard() {
  const navigate = useNavigate();
  const { logedUser } = useContext(UserContext);
  
  useEffect(() => {
    if(!logedUser.id){
      navigate('/login');
    };   

  //eslint-disable-next-line
  }, []);
  
  

  return (
    <DashboardStyles>
      <Header marginTop="8px" />
      <main>
        <UserProfile />
        <SearchEngine />
        <Brazil />
      </main>
    </DashboardStyles>
  );
}
