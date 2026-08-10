import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import Souvenirs from "./pages/article categories/Souvenirs";
import Magnets from "./pages/article categories/Magnets";
import Mug from "./pages/article categories/Mug";
import Printed from "./pages/article categories/Printed";
import Keyring from "./pages/article categories/Keyring";
import Ncr from "./pages/article categories/Ncr";
import Stamp from "./pages/article categories/Stamp";
import Other from "./pages/article categories/Other";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
        <Route path="/magnets" element={<Magnets />} />
        <Route path="/mug" element={<Mug />} />
        <Route path="/printed" element={<Printed />} />
        <Route path="/keyring" element={<Keyring />} />
        <Route path="/ncr" element={<Ncr />} />
        <Route path="/stamp" element={<Stamp />} />
        <Route path="/other" element={<Other />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;