import { useState, useEffect } from "react";
import { Alert } from "react-native";
import Loading from "./components/loading/Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./components/weather/Weather";
import { ConditionEnum } from "./shared/types";

const WEATHER_API_KEY = "e99632b973df12710f80a0bcbd7f3884";

interface WeatherItem {
  main: ConditionEnum;
}

interface WeatherResp {
  main: {
    temp: number;
  },
  weather: WeatherItem[]
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState<WeatherResp | null>(null);

  const getWeather = async (lat: number, lon: number) => {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    setWeather(data);
  };

  useEffect(() => {
    const getCurrentLocation = async () => {

      try {
        await Location.requestForegroundPermissionsAsync();
        const location = await Location.getCurrentPositionAsync();
        const {
          coords: {
            latitude,
            longitude
          }
        } = location;

        getWeather(latitude, longitude);
        setLoading(false);
      } catch (error) {
        Alert.alert("Error occurred while retrieving location", error as unknown as string);
      }
    };

    getCurrentLocation();
  }, []);

  console.log('weather?.weather[0].main ?? ConditionEnum.Clear', weather?.weather[0].main ?? ConditionEnum.Clear);


  return (
    loading ? <Loading /> :
      <Weather temp={weather?.main.temp ?? 0} condition={weather?.weather[0].main ?? ConditionEnum.Clear} />
  );
};

export default App;

