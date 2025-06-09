import { useState, useEffect } from "react";

function Predict({ date, place }) {
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchWeather() {
      if (!date || !place) {
        setWeather("");
        return;
      }
      setLoading(true);
      try {
        const key = process.env.REACT_APP_API_KEY;
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${place}&dt=${date}`
        );
        const data = await res.json();

        if (data.error) {
          setWeather("No Data");
        } else {
          const forecast = data.forecast.forecastday[0].day;
          const condition = forecast.condition.text;
          const chanceOfRain = forecast.daily_chance_of_rain;
          const risk = chanceOfRain > 60 ? 8 : chanceOfRain > 30 ? 5 : 2;
          setWeather(
            `Weather: ${condition}, Rain Chance: ${chanceOfRain}%. Risk: ${risk}/10`
          );
        }
      } catch (err) {
        setWeather("Error fetching data");
      }
      setLoading(false);
    }

    fetchWeather();
  }, [date, place]);

  return (
    <div style={{ marginTop: "20px", fontSize: "16px", color: "#333" }}>
      {loading ? <p>Loading...</p> : <p><strong>Prediction:</strong> {weather}</p>}
    </div>
  );
}

export default Predict;
