import { iModalHeader } from "./types";
import { AiOutlineClose } from "react-icons/ai";
import { ModalHeaderStyled } from "./styles";

export function ModalHeader({ title, callback }: iModalHeader) {
  return (
    <ModalHeaderStyled>
      <h2>{title}</h2>
      <button onClick={() => callback(false)}>
        <AiOutlineClose />
      </button>
    </ModalHeaderStyled>
  );
}
