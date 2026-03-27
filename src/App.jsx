import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/Players";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AvailablePlayers />
      <Players />
    </>
  );
}

export default App;
