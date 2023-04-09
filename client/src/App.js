import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Snip from "./pages/snip";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/snips/:id" element={<Snip />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
