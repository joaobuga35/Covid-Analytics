import { StyledSearch } from "./styled";
import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { ListCard } from "../CardsList/indexs";

export function SearchEngine(){

    return(
        <StyledSearch>
            <h2>Buscar Estados</h2>
            <div>
                <input type="text" name="Pesquisa" placeholder="Digitar Pesquisa"/>
                <Button variant="contained"><IoIosSearch/></Button>
            </div>
            <main>
                <ListCard/>
            </main>

        </StyledSearch>
    )

}