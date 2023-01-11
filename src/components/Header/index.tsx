import { MainTitleStyled } from "./styles";
import logo from "../../assets/logoOficial.png";
import { iTitleHeader } from "./types";

export function Header({ colorTitle, marginTop }: iTitleHeader) {

  return (
    <MainTitleStyled colorTitle={colorTitle} marginTop={marginTop}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <h1>Covid Analytics</h1>
    </MainTitleStyled>
  );
};
