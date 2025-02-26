import Countdown from "./components/Countdown";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
