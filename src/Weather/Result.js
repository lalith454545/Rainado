import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [bgUrl, setBgUrl] = useState("");

  // 👇 Safe default place for hook usage
  useEffect(() => {
    if (state?.place) {
      const img = new Image();
      const url = `https://source.unsplash.com/1600x900/?${encodeURIComponent(
        state.place
      )}`;
      img.src = url;
      img.onload = () => setBgUrl(url);
    }
  }, [state]);

  if (!state) {
    return (
      <div style={{ padding: "30px" }}>
        <h2>No Data</h2>
        <button onClick={() => navigate("/")}>Back</button>
      </div>
    );
  }

  const {
    place,
    region,
    country,
    date,
    condition,
    maxTemp,
    minTemp,
    humidity,
    rainChance,
    windKph,
    uv,
  } = state;

  const wrapperStyle = {
    backgroundImage: bgUrl ? `url(${bgUrl})` : "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    padding: "50px 20px",
    color: "white",
    fontFamily: "Segoe UI, sans-serif",
    transition: "background-image 0.5s ease-in-out",
    backgroundColor: "#0d1117", // fallback dark background
  };

  const overlayStyle = {
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 0 20px #00ffff",
    maxWidth: "600px",
    margin: "auto",
    textShadow: "0 0 5px #00ffff",
    lineHeight: "1.8",
  };

  return (
    <div style={wrapperStyle}>
      <div style={overlayStyle}>
        <h2>Weather in {place}, {region}, {country}</h2>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Condition:</strong> {condition}</p>
        <p><strong>Max Temp:</strong> {maxTemp}°C</p>
        <p><strong>Min Temp:</strong> {minTemp}°C</p>
        <p><strong>Humidity:</strong> {humidity}%</p>
        <p><strong>Rain Chance:</strong> {rainChance}%</p>
        <p><strong>Wind:</strong> {windKph} km/h</p>
        <p><strong>UV Index:</strong> {uv}/10</p>
        <button
          onClick={() => navigate("/")}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#00ffff",
            color: "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 10px #00ffff"
          }}
        >
          Check Another Place
        </button>
      </div>
    </div>
  );
}

export default Result;
