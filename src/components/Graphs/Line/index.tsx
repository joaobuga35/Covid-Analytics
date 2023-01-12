import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
import { iLine } from "../types";
import { generateColors } from "../../../functions/reusable";
import { TitleChartStyled } from "../styles";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

export function LineChart({ info, labels, title }: iLine) {
  const colors = generateColors();
  const data = {
    labels: labels,
    datasets: info.map((el) => {
      el.backgroundColor = colors.colorA;
      el.borderColor = colors.color;
      el.tension = 0.3;
      el.fill = true;
      el.showLine = true;
      return el;
    }),
  };

  return (
    <div>
      <TitleChartStyled>{title}</TitleChartStyled>
      <Line data={data} />
    </div>
  );
}
