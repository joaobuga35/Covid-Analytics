import { MainTitle } from "./styles";
import logo from "../../assets/logoOficial.png";

export function Header() {
  return (
    <MainTitle>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1>Covid Analytics</h1>
    </MainTitle>
  );
}
