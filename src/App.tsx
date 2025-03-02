import Countdown from "./components/Countdown";
import Home from "./pages/home";
import Post1 from "./post/first-post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post/post1" element={<Post1 />} />
      </Routes>
    </Router>
  );
};

export default App;
