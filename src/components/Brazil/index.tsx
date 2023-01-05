import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { BrazilStyle } from "./styles";
import brazilMap from "../../assets/brazilMap.svg";

export function Brazil() {
  const brazilData = [
    {
      name: "Casos",
      value: 1000,
    },
    {
      name: "Confirmados",
      value: 982,
    },
    {
      name: "Mortes",
      value: 466464,
    },
    {
      name: "Recuperados",
      value: 797,
    },
    {
      name: "Suspeitos",
      value: 798543,
    },
  ];
  return (
    <BrazilStyle>
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
    </BrazilStyle>
  );
}
