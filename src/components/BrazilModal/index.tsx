import { RenderGraphs } from "./graphs";
import { GraphModalStyled } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { iBrazilModalInterface } from "../Brazil/types";

export function ModalBrazil({setOpen}: iBrazilModalInterface) {
  
  return (
    <GraphModalStyled>
      <div>
        <div>
          <h2>Brasil dados</h2>
          <button onClick={() => setOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <RenderGraphs />
      </div>
    </GraphModalStyled>
  );
}
