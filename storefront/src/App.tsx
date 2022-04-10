import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layouts/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
