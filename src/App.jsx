import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Add from "./coponent/Add/Add"
import HHeader from "./coponent/Header/HHeader"
import Home from "./coponent/Home/Home"

function App() {
  return (
    <Router>
      <HHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addData" element={<Add />} />
        {/* <Route path="/viewData" element={<View />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
