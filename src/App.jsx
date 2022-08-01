import { useEffect, useState } from "react";
import { Calculate, Header, Hero, Stats, Why, Trade } from "./components";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />

      <Stats />

      <Why />
      <Calculate />
      <Trade />
    </div>
  );
}

export default App;
