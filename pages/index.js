import { useRecords } from "beneath-react";

const makeFilter = (input) => {
  return '{ "symbol": "' + input + '"}'
}

export default function Home() {
  // TODO: get symbol input from the user
  const filter = makeFilter("AAPL")

  // TODO: fetch an aggregated table, not a long one
  const { records, loading, error } = useRecords({
    table: "examples/wallstreetbets-analytics/r-wallstreetbets-comments-stock-mentions",
    query: { type: "index", filter },
    subscribe: true,
    pageSize: 25
  })

  if (loading) {
    return (
      <p>Loading...</p>
    );
  } else if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>r-wallstreetbets-comments-stock-mentions</h1>
      <ul>
        {records.map((record) => {
          const d = new Date(record["timestamp"])
          return (
            <li key={record["@meta"].key}>
              {record["symbol"]}
              {d.toUTCString()}
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
}
