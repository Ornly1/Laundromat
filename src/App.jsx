import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import page
import Display from "./pages/Display";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Routes>
          <Route path="/" element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
