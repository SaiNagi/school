import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import Faqs from "./components/Faqs";
import AdmissionForm from "./components/Reg/index";
import Admission from "./components/Admission";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Table />} />

        <Route path="/admission-form" element={<AdmissionForm />} />
        <Route path="/admission" element={<Admission />} />
      </Routes>
    </Router>
  );
}

export default App;
