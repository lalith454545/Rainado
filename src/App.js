import React, { useState } from "react";
import Navbar from "./Weather/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Weather/Form";
import Result from "./Weather/Result";

function AboutUs() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "30px",
        padding: "30px",
        color: "#ccc",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#121212",
        borderRadius: "12px",
        maxWidth: "900px",
        margin: "40px auto",
        boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)"
      }}
    >
      {/* Image container */}
      <div style={{ flex: "1 1 40%" }}>
        <img
          src="lalsrip2.jpg"
          alt="Team working"
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 0 15px #00ffff"
          }}
        />
      </div>

      {/* Text container */}
      <div style={{ flex: "1 1 60%" }}>
        <h2 style={{ color: "#00ffff", marginBottom: "16px" }}>About Us</h2>
        <p style={{ lineHeight: "1.6", fontSize: "16px", whiteSpace: "pre-line" }}>
          Lalith and Sripad learned React and API integration through hands-on practice.
          This project was created as a small but meaningful step to apply those skills in building a weather prediction app.

          {"\n\n"}Our goal is to provide users with clear, reliable weather information in a simple and accessible way.

          {"\n\n"}We are committed to continuous learning and improving this project over time.
        </p>
      </div>
    </div>
  );
}


function App() {
    return (
        <Router>
            <div style={{ backgroundColor: "#0d1117", minHeight: "100vh", color: "#ffffff" }}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Form />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
