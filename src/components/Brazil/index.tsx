import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ButtonContainerStyled, SectionStyled } from "./styles";
import brazilMap from "../../assets/brazilMap.svg";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { Button } from "@mui/material";
import { iBrazilModalInterface } from "./types";

export function Brazil({ setOpen }: iBrazilModalInterface) {
  const { states } = useContext(SearchContext);

  const brazilData = [
    {
      name: "Suspeitos",
      value: states.reduce((acc, curr) => acc + curr.suspects, 0),
    },
    {
      name: "Mortes",
      value: states.reduce((acc, curr) => acc + curr.deaths, 0),
    },
    {
      name: "Casos",
      value: states.reduce((acc, curr) => acc + curr.cases, 0),
    },
  ];

  return (
    <SectionStyled>
      <h2>Brasil</h2>
      <div>
        <TableContainer>
          <Table>
            <TableBody>
              {brazilData.map((info, index) => (
                <TableRow key={index}>
                  <TableCell>{info.name}</TableCell>
                  <TableCell align="right">{info.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ButtonContainerStyled>
          <legend>
            Tenha acesso a mais informações sobre todo o território nacional
          </legend>
          <Button
            variant="text"
            aria-label="olhar conteúdo"
            size="large"
            onClick={() => setOpen(true)}
          >
            Detalhes
          </Button>
        </ButtonContainerStyled>
      </div>
      <picture>
        <img src={brazilMap} alt="Mapa do Brasil" />
      </picture>
    </SectionStyled>
  );
}
