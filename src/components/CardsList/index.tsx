import { ListStyle } from "./styles";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import uuid from 'react-uuid';
import { Button } from "@mui/material";

export function ListCard(){
    const brazilData = [
        {
			uid: 35,
			uf: "SP",
			state: "São Paulo",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 36,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 37,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 35,
			uf: "SP",
			state: "São Paulo",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 36,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 37,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 35,
			uf: "SP",
			state: "São Paulo",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 36,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 37,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 35,
			uf: "SP",
			state: "São Paulo",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 36,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        {
			uid: 37,
			uf: "MG",
			state: "Minas Gerais",
			cases: 6317683,
			deaths: 177439,
			suspects: 5334,
			refuses: 596,
			datetime: "2023-01-02T21:33:47.128Z"
		},
        
    ];
    return(
        <ListStyle>
        { 
		brazilData.map((el)=>(
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
                <Button variant="contained">Favoritar</Button>
            </li>
        ))
		}
        </ListStyle> 
    );
}