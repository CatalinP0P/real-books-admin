import React from "react";
import Layout from "./Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Overview from "./pages/Overview";
import Books from "./pages/Books";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<label>Categories</label>} />
          <Route path="/authors" element={<label>Authors</label>} />
          <Route path="/blacklist" element={<label>Blacklist</label>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
