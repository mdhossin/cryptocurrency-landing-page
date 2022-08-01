import { useEffect, useState } from "react";
import { Header, Hero } from "./components";
// import aos
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);

  // aos init
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />

      <Hero />
    </div>
  );
}

export default App;
