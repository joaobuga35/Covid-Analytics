import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { FavoriteContext } from "../../contexts/FavoriteContext";
import { FavoriteStyle } from "./style";
import x from '../../assets/x.png'
import rs from '../../assets/rs.png'


export function FavoriteContent(){
    const { dataModal,setOpenModal } = useContext(FavoriteContext);
    
    return(
        <FavoriteStyle>
           <button onClick={()=>setOpenModal(false)}><img src={x} alt="close button" /></button>
           <h2>{dataModal[0].data.state}</h2>
           <section>
            <div className="div_text">
                {dataModal.map((el)=>(
                    <TableContainer>
                    <Table>
                    <TableBody>
                        <TableRow key={Math.random()}>
                            <TableCell>Casos</TableCell>
                            <TableCell align="right">{el.data.cases}</TableCell>
                        </TableRow>
                        <TableRow key={Math.random()}>
                            <TableCell>Mortes</TableCell>
                            <TableCell align="right">{el.data.deaths}</TableCell>
                        </TableRow>
                        <TableRow key={Math.random()}>
                            <TableCell>Suspeitos</TableCell>
                            <TableCell align="right">{el.data.suspects}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                    </TableContainer>
                ))}
            </div>
            <img src={rs} alt="estado brasileiro" />
           </section>
        </FavoriteStyle>


    )
   

}