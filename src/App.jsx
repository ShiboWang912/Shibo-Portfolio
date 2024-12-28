import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0  bg-gradient-to-tr from-[#E0E3ED] to-[#DEE0EC]">
        <Navbar />
        <Hero />
        <About />
        <Works />
        <Tech />
        <Experience />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
