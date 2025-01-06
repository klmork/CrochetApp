import "./App.css";
import Home from "./pages/home";
import Skeins from "./pages/skeins";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yarn" element={<Skeins />} />
      </Routes>
    </Router>
  );
}

export default App;
