import { ListStyled } from "./styles";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { FavoriteContext } from "../../contexts/FavoriteContext";

export function ListCard() {
  const { filterList, states } = useContext(SearchContext);
  const { searchFavoriteId } = useContext(FavoriteContext);

  let data = [];
  if (filterList.length) {
    data = filterList;
  } else {
    data = states;
  };

  return (
    <ListStyled>
      {data.map((el) => (
        <li key={Math.random()}>
          <h2>{el.state}</h2>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow key={Math.random()}>
                  <TableCell>Suspeitos</TableCell>
                  <TableCell align="right">{el.suspects}</TableCell>
                </TableRow>
                <TableRow key={Math.random()}>
                  <TableCell>Mortes</TableCell>
                  <TableCell align="right">{el.deaths}</TableCell>
                </TableRow>
                <TableRow key={Math.random()}>
                  <TableCell>Casos</TableCell>
                  <TableCell align="right">{el.cases}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" onClick={() => searchFavoriteId(el.uid)}>
            Favoritar
          </Button>
        </li>
      ))}
    </ListStyled>
  );
};
