import React from "react";
import Layout from "./Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<label>Overview</label>} />
          <Route path="/books" element={<label>Books</label>} />
          <Route path="/categories" element={<label>Categories</label>} />
          <Route path="/authors" element={<label>Authors</label>} />
          <Route path="/blacklist" element={<label>Blacklist</label>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
