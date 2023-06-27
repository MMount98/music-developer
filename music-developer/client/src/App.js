import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import BandsInStatePage from "./components/pages/BandsInState";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/localBands" element={<BandsInStatePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
