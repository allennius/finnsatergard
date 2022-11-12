import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home"
import NoPage from "./pages/nopage/NoPage";
import Kossa from "./pages/kossa/Kossa";
import Sheep from "./pages/sheep/Sheep";

import "./index.css"

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/finnsatergard/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/ko" element={<Kossa />} />
          <Route path="/sheep" element={<Sheep />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(<App />)
