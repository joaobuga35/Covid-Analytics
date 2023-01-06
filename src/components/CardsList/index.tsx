import { ListStyle } from "./styles";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import uuid from 'react-uuid';
import { Button } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export function ListCard(){
	const { filterList }=useContext(SearchContext);
        
    return(
        <ListStyle>
        { 
		filterList.map((el)=>(
            <li key={uuid()} >
                <h2>{el.state}</h2>
               <TableContainer>
                <Table>
                <TableBody>
                    <TableRow key={uuid()}>
                        <TableCell>Mortes</TableCell>
                        <TableCell align="right">{el.deaths}</TableCell>
                    </TableRow>
                    <TableRow key={uuid()}>
                        <TableCell>Casos</TableCell>
                        <TableCell align="right">{el.cases}</TableCell>
                    </TableRow>
                    <TableRow key={uuid()}>
                        <TableCell>Suspeitos</TableCell>
                        <TableCell align="right">{el.suspects}</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
                </TableContainer>
                <Button variant="contained" id={el.uid+''}>Favoritar</Button>
            </li>
        ))
		}
        </ListStyle> 
    );
}