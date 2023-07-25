import React from "react";
import Layout from "./Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";
import Books from "./pages/Books";
import Genres from "./pages/Genres";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/books" element={<Books />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/authors" element={<label>Authors</label>} />
          <Route path="/blacklist" element={<label>Blacklist</label>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
