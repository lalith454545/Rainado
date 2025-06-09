import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  async function fetchWeatherAndNavigate() {
    if (!place || !date) return;

    try {
      const key = process.env.REACT_APP_API_KEY;
      const res = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&dt=${date}`
      );
      const data = await res.json();

      if (data.error) {
        alert("No data available for this input.");
        return;
      }

      const forecast = data.forecast.forecastday[0].day;
      const fullData = {
        place: data.location.name,
        region: data.location.region,
        country: data.location.country,
        date: data.forecast.forecastday[0].date,
        condition: forecast.condition.text,
        maxTemp: forecast.maxtemp_c,
        minTemp: forecast.mintemp_c,
        humidity: forecast.avghumidity,
        rainChance: forecast.daily_chance_of_rain,
        windKph: forecast.maxwind_kph,
        uv: forecast.uv,
      };

      navigate("/result", { state: fullData });
    } catch (err) {
      alert("Error fetching weather data.");
    }
  }

  const formStyle = {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Segoe UI, sans-serif"
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer"
  };

  return (
    <div style={formStyle}>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Enter the place"
        style={inputStyle}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split("T")[0]}
        max={new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
        style={inputStyle}
      />
      <button onClick={fetchWeatherAndNavigate} style={buttonStyle}>
        Submit
      </button>
    </div>
  );
}

export default Form;
