import { ListStyle } from "./styles";
import { TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
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
            <li key={Math.random()} >
                <h2>{el.state}</h2>
               <TableContainer>
                <Table>
                <TableBody>
                    <TableRow key={Math.random()}>
                        <TableCell>Mortes</TableCell>
                        <TableCell align="right">{el.deaths}</TableCell>
                    </TableRow>
                    <TableRow key={Math.random()}>
                        <TableCell>Casos</TableCell>
                        <TableCell align="right">{el.cases}</TableCell>
                    </TableRow>
                    <TableRow key={Math.random()}>
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