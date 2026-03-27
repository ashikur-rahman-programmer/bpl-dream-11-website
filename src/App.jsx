import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Players from "./components/Players";
// import PlayersHead from "./components/PlayersHead";

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const PlayersPromise = fetchData();
  const [coin, setCoin] = useState(50000);
  return (
    <>
      <Navbar coin={coin} />
      <Hero />
      {/* <PlayersHead /> */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Players
          PlayersPromise={PlayersPromise}
          coin={coin}
          setCoin={setCoin}
        />
      </Suspense>
    </>
  );
}

export default App;
