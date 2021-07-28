import "./styles.css";

import { data } from "./data";
import Ticker from "./components/Ticker";

import ItemTicker from "./ItemTicker";

export default function App() {
  return (
    <Ticker
      height={48}
      maxSpeed={8}
      items={data}
      renderItem={(props) => <ItemTicker {...props} />}
    />
  );
}
