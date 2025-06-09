import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "rgba(0, 0, 0, 0.6)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 20px rgba(0, 255, 255, 0.1)",
    color: "#00ffff",
    fontFamily: "Segoe UI, sans-serif",
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: "#00ffff",
    textShadow: "0 0 10px #00ffff"
  };

  const linkContainerStyle = {
    display: "flex",
    gap: "20px"
  };

  const buttonStyle = {
    backgroundColor: "transparent",
    border: "1px solid #00ffff",
    color: "#00ffff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "all 0.3s",
    textShadow: "0 0 5px #00ffff"
  };

  const hoverEffect = (e) => {
    e.target.style.backgroundColor = "#00ffff";
    e.target.style.color = "#000";
    e.target.style.boxShadow = "0 0 15px #00ffff";
  };

  const removeHoverEffect = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#00ffff";
    e.target.style.boxShadow = "none";
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Rainado ⚡</div>
      <div style={linkContainerStyle}>
        <button
          style={buttonStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={removeHoverEffect}
          onClick={() => navigate("/")}
        >
          Check Weather
        </button>
        <button
          style={buttonStyle}
          onMouseEnter={hoverEffect}
          onMouseLeave={removeHoverEffect}
          onClick={() => navigate("/about")}
        >
          About Us
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
