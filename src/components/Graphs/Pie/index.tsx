import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateColors } from "../../../functions/reusable";
import { TitleChartStyle } from "../styles";
import { iPizza } from "../types";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

export function PieChart({ values, labels, title }: iPizza) {
  const dataPie = {
    datasets: [
      {
        data: values,
        backgroundColor: values.map((el) => generateColors().color),
      },
    ],
    labels: labels,
  };
  return (
    <div>
      <TitleChartStyle>{title}</TitleChartStyle>
      <Pie data={dataPie} />
    </div>
  );
}