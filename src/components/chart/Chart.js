import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const arrValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...arrValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
