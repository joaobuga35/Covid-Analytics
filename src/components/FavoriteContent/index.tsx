import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { FavoriteStyled } from "./style";
import { SearchContext } from "../../contexts/SearchContext";
import Button from "@mui/material/Button";
import { WhatsappShareButton, WhatsappIcon } from "react-share";
import { ModalHeader } from "../ModalHeader";

export function FavoriteContent() {
  const { dataModal, setOpenModal, deleteFavoriteId } =
    useContext(FavoriteContext);
  const { filterMap } = useContext(SearchContext);
  console.log(filterMap);
  return (
    <FavoriteStyled>
      <ModalHeader callback={setOpenModal} title={dataModal[0].data.state}/>
      <section>
        <div className="div_text">
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow key={Math.random()}>
                  <TableCell>Suspeitos</TableCell>
                  <TableCell align="right">
                    {dataModal[0].data.suspects}
                  </TableCell>
                </TableRow>
                <TableRow key={Math.random()}>
                  <TableCell>Mortes</TableCell>
                  <TableCell align="right">
                    {dataModal[0].data.deaths}
                  </TableCell>
                </TableRow>
                <TableRow key={Math.random()}>
                  <TableCell>Casos</TableCell>
                  <TableCell align="right">{dataModal[0].data.cases}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <WhatsappShareButton
            url={`
                Dados atualizados do COVID em ${dataModal[0].data.state}:
                ❓ SUSPEITOS => ${dataModal[0].data.suspects} 
                🦠 CASOS => ${dataModal[0].data.cases} 
                ☠️ MORTES => ${dataModal[0].data.deaths}
                `}
          >
            <div className="iconContainer">
              <WhatsappIcon round size={"36px"} />
            </div>
          </WhatsappShareButton>
          <Button
            variant="contained"
            onClick={() => deleteFavoriteId(dataModal[0].id)}
          >
            Excluir
          </Button>
        </div>
        <img src={filterMap} alt="estado brasileiro" />
      </section>
    </FavoriteStyled>
  );
}
