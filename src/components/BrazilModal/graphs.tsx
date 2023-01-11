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
import { TitleChartStyle } from "../Graphs/styles";

export function RenderGraphs() {
  const {
    brazilCases,
    findHistoryCasesState,
    showPercentageProportionalCasesState,
    showPercentageProportionalDeathsState,
  } = useContext(ChartContext);
  const [show, setShow] = useState(false);
  const { states } = useContext(SearchContext);
  useEffect(() => {
    if (brazilCases) {
      setShow(true);
    }
  }, [brazilCases]);

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
      <TitleChartStyle>
        Número de casos por estado
      </TitleChartStyle>
      {show &&
        states.map((state, index) => (
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
      <TableContainer>
        <Table>
          <TableBody>
            {states.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.state}</TableCell>
                <TableCell align="right">
                  {(
                    showPercentageProportionalCasesState(info)?.toFixed(2) + ""
                  ).replace(".", ",")}
                  %
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table>
          <TableBody>
            {states.map((info, index) => (
              <TableRow key={index}>
                <TableCell>{info.state}</TableCell>
                <TableCell align="right">
                  {(
                    showPercentageProportionalDeathsState(info)?.toFixed(2) + ""
                  ).replace(".", ",")}
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
}
