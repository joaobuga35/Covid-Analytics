import { SearchStyled } from "./styles";
import { Button } from "@mui/material";
import { IoIosSearch } from "react-icons/io";
import { ListCard } from "../CardsList";
import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export function SearchEngine() {
  const { setSearch, valueSearch } = useContext(SearchContext);

  return (
    <SearchStyled>
      <h2>Buscar Estados</h2>
      <div>
        <input
          type="text"
          name="Pesquisa"
          placeholder="Digitar Pesquisa"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button variant="contained" onClick={() => valueSearch()}>
          <IoIosSearch />
        </Button>
      </div>
      <ListCard />
    </SearchStyled>
  );
};
