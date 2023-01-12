import { RenderGraphs } from "./graphs";
import { GraphModalStyled } from "./styles";
import { iBrazilModalInterface } from "../Brazil/types";
import { ModalHeader } from "../ModalHeader";

export function ModalBrazil({ setOpen }: iBrazilModalInterface) {
  return (
    <GraphModalStyled>
      <div>
        <ModalHeader title="Brasil dados" callback={setOpen} />
        <RenderGraphs />
      </div>
    </GraphModalStyled>
  );
};
