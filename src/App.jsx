import { useEffect, useState } from "react";
import { Header, Hero, Stats, Why } from "./components";
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
    </div>
  );
}

export default App;
