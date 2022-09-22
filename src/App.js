import "./App.css";
import Home from "./components/Home";
import CreateAndSell from "./components/CreateAndSell";
import Choose from "./components/Choose";
import MarketPlace from "./components/MarketPlace";

function App() {
  return (
    <div>
      <Home />
      <CreateAndSell />
      <Choose />
      <MarketPlace />
    </div>
  );
}

export default App;
