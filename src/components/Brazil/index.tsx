import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { BrazilStyle } from "./styles";
import brazilMap from "../../assets/brazilMap.svg";

export function Brazil() {
  return (
    <BrazilStyle>
      <h2>Brasil</h2>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow key={0}>
              <TableCell>Casos</TableCell>
              <TableCell align="right">1000</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>Confirmados</TableCell>
              <TableCell align="right">982</TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell>Mortes</TableCell>
              <TableCell align="right">694411</TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell>Recuperados</TableCell>
              <TableCell align="right">46454</TableCell>
            </TableRow>
            <TableRow key={4}>
              <TableCell>Suspeitos</TableCell>
              <TableCell align="right">54564</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <picture>
        <img src={brazilMap} alt="Mapa do Brasil" />
      </picture>
    </BrazilStyle>
  );
}
