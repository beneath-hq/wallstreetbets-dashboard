import { Container } from "@material-ui/core";
import { useState } from "react";
import StockLineChart from "../components/StockLineChart";
import SymbolDropdown from "../components/SymbolDropdown";

const TIME_WINDOW = 30; // days

const makeFilter = (symbol: string) => {
  var d = new Date();
  d.setDate(d.getDate() - TIME_WINDOW);
  return `{ "symbol": "${symbol}", "day":{"_gt":"${d.toISOString()}"}}`;
};

export default function Home() {
  const [symbol, setSymbol] = useState("AAPL");
  const filter = makeFilter(symbol);

  return (
    <Container>
      <h1>Stock mentions on r/wallstreetbets</h1>
      <SymbolDropdown
        symbol={symbol}
        setSymbol={(symbol) => setSymbol(symbol)}
      />
      <h2>{symbol}</h2>
      <StockLineChart filter={filter} />
    </Container>
  );
}
