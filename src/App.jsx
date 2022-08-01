import { useState } from "react";
import { Header, Hero } from "./components";

function App() {
  // mobile nav state
  const [navMobile, setNavMobile] = useState(false);
  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />

      <Hero />
    </div>
  );
}

export default App;
