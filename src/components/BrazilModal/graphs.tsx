import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer/TableContainer";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { LineChart } from "../Graphs/Line";
import { PieChart } from "../Graphs/Pie";
import { ChartContext } from "../../contexts/ChartContext";
import { GraphListStyled } from "./styles";
import { TitleChartStyled } from "../Graphs/styles";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import { iStates } from "../../contexts/SearchContext/types";

export function RenderGraphs() {
  const {
    brazilCases,
    findHistoryCasesState,
    showPercentageProportionalCasesState,
    showPercentageProportionalDeathsState,
  } = useContext(ChartContext);
  const [show, setShow] = useState(false);
  const { states } = useContext(SearchContext);
  const [render, setRender] = useState(states);
  useEffect(() => {
    if (brazilCases) {
      setShow(true);
    }
  }, [brazilCases]);

  function filterState(state: string) {
    if (state === "Todos") {
      setRender(states);
    } else {
      const filteredStatesList = states.filter((uf) => state === uf.uf);
      setRender(filteredStatesList);
    }
  }

  return (
    <GraphListStyled>
      {show && (
        <LineChart
          title="Números de casos Brasil"
          labels={brazilCases.map(({ day }) => day)}
          info={[
            {
              data: brazilCases.map(({ total }) => total),
              label: "Casos",
            },
          ]}
        />
      )}
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Filtrar por estado
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
          onChange={(e) => filterState(e.target.value)}
        >
          <option key="none">Todos</option>
          {states.map((el, index) => (
            <option key={index} value={el.uf}>
              {el.state}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
      <TitleChartStyled>Número de casos por estado</TitleChartStyled>
      {show &&
        render.map((state, index) => (
          <LineChart
            key={index}
            title={state.state}
            labels={findHistoryCasesState(state.uf).map(({ day }) => day)}
            info={[
              {
                data: findHistoryCasesState(state.uf).map(({ total }) => total),
                label: "Casos",
              },
            ]}
          />
        ))}
      <TitleChartStyled>
        Número de casos proporcionais por estado
      </TitleChartStyled>
      <TableContainer>
        <Table>
          <TableBody>
            {render
              .map((info) => {
                info.percentageCases =
                  showPercentageProportionalCasesState(info);
                return info;
              })
              .sort(
                (b: iStates, a: iStates) =>
                  a.percentageCases! - b.percentageCases!
              )
              .map((info, index) => (
                <TableRow key={index}>
                  <TableCell>{info.state}</TableCell>
                  <TableCell align="right">
                    {(info.percentageCases?.toFixed(2) + "").replace(".", ",")}%
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TitleChartStyled>
        Número de mortes proporcionais por estado
      </TitleChartStyled>
      <TableContainer>
        <Table>
          <TableBody>
            {render
              .map((info) => {
                info.percentageDeaths =
                  showPercentageProportionalDeathsState(info);
                return info;
              })
              .sort(
                (b: iStates, a: iStates) =>
                  a.percentageDeaths! - b.percentageDeaths!
              )
              .map((info, index) => (
                <TableRow key={index}>
                  <TableCell>{info.state}</TableCell>
                  <TableCell align="right">
                    {(info.percentageDeaths?.toFixed(2) + "").replace(".", ",")}
                    %
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PieChart
        title="Mortos absolutos"
        labels={states.map(({ state }) => state)}
        values={states.map(({ deaths }) => deaths)}
      />
      <PieChart
        title="Casos absolutos"
        labels={states.map(({ state }) => state)}
        values={states.map(({ cases }) => cases)}
      />
    </GraphListStyled>
  );
};
