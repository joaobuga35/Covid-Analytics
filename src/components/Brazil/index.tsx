import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { SectionStyle } from "./styles";
import brazilMap from "../../assets/brazilMap.svg";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export function Brazil() {
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
    <SectionStyle>
      <h2>Brasil</h2>
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
      <picture>
        <img src={brazilMap} alt="Mapa do Brasil" />
      </picture>
    </SectionStyle>
  );
}
