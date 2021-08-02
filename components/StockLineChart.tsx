import { useRecords } from "beneath-react";
import { FC } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  filter: string;
}

const StockLineChart: FC<Props> = ({ filter }) => {
  const { records, loading, error } = useRecords({
    table: "examples/wallstreetbets-analytics/stock-mentions-rollup-daily",
    query: { type: "index", filter },
    subscribe: false,
    pageSize: 30,
  });

  // Q: This gets hit 3 times. Are the records getting fetched three times?
  console.log(records);

  return (
    <ResponsiveContainer width={"100%"} height={400}>
      <LineChart width={500} height={300} data={records}>
        <XAxis
          dataKey="day"
          tickFormatter={(tickItem) => {
            const d = new Date(tickItem);
            return d.toLocaleDateString("en-US");
          }}
        />
        <YAxis
          yAxisId="left"
          dataKey="num_mentions"
          label={{ value: "Mentions", angle: -90, position: "insideLeft" }}
        />
        <Line
          type="monotone"
          dataKey="num_mentions"
          stroke="#8884d8"
          yAxisId="left"
          isAnimationActive={false}
        />
        <Line
          type="monotone"
          dataKey="num_positive"
          stroke="#82ca9d"
          yAxisId="left"
          isAnimationActive={false}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StockLineChart;
