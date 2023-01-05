import { StyledSearch } from "./styled";

import { IoIosSearch } from "react-icons/io";

export function SearchEngine(){

    return(
        <StyledSearch>
            <h2>Buscar Estados</h2>
            <div>
                <input type="text" name="Pesquisa" placeholder="Digitar Pesquisa"/>
                <button><IoIosSearch/></button>
            </div>
            <main>
                <ul>
                    
                </ul>
            </main>

        </StyledSearch>
    )

}