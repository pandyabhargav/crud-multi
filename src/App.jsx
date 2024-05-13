import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Add from "./coponent/Add/Add"
import HHeader from "./coponent/Header/HHeader"
import Home from "./coponent/Home/Home"
import ViewUser from "./coponent/View user/Vievuser";
import Viev from "./coponent/View/Viev";
import Edit from "./coponent/Edit/Edit";

function App() {
  return (
    <Router>
      <HHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addData" element={<Add />} />
        <Route path="/viewData" element={<Viev/>} />
        <Route path="/editData" element={<Edit />} />
        <Route path="/viewData/:userID" element={<ViewUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
