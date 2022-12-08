import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Desktop/Home";
import Apropos from "./pages/Desktop/A-propos";
import FicheLogement from "./pages/Desktop/Fiche-Logement";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <BrowserRouter>
            <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/A-propos" element={<Apropos />} />
                  <Route
                        path="/Fiche-Logement/:id"
                        element={<FicheLogement />}
                  />
                  <Route path="/*" element={<Error />} />
            </Routes>
      </BrowserRouter>
);
