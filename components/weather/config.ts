import { ColorValue } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ConditionEnum } from "../../shared/types";

type IoniconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

export const weatherOptions: Record<ConditionEnum, {
  iconName: IoniconName;
  gradient: [ColorValue, ColorValue, ...ColorValue[]];
  title?: string;
  subtitle?: string;
}> = {
  [ConditionEnum.Thunderstorm]: {
    iconName: "weather-lightning",
    gradient: ["#141e30", "#243b55"],
    title: "Thunderstorm is coming.",
    subtitle: "Stay indoors and avoid open areas until the storm passes."
  },
  [ConditionEnum.Clouds]: {
    iconName: "clouds",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Cloudy skies.",
    subtitle: "Overcast weather with little or no sunshine expected."
  },
  [ConditionEnum.Drizzle]: {
    iconName: "weather-partly-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Light drizzle.",
    subtitle: "Gentle rain is falling, but not too heavy."
  },
  [ConditionEnum.Rain]: {
    iconName: "weather-rainy",
    gradient: ["#000046", "#1cb5e0"],
    title: "Rainy weather.",
    subtitle: "Expect showers throughout the day — don’t forget an umbrella."
  },
  [ConditionEnum.Snow]: {
    iconName: "weather-snowy",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Snowfall outside.",
    subtitle: "Snow is covering the ground, drive carefully and stay warm."
  },
  [ConditionEnum.Clear]: {
    iconName: "weather-sunny",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Clear sky.",
    subtitle: "Sunny and bright, perfect weather for outdoor activities."
  },
  [ConditionEnum.Mist]: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Misty morning.",
    subtitle: "Visibility is reduced, take care while driving."
  },
  [ConditionEnum.Tornado]: {
    iconName: "weather-tornado",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Tornado alert.",
    subtitle: "Dangerous winds approaching, seek shelter immediately."
  },
  [ConditionEnum.Squall]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Strong squalls.",
    subtitle: "Sudden strong gusts of wind, be cautious outdoors."
  },
  [ConditionEnum.Ash]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Volcanic ash.",
    subtitle: "Air quality may be poor, avoid breathing outside air."
  },
  [ConditionEnum.Sand]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Sandstorm ahead.",
    subtitle: "Strong winds carry sand, limit outdoor exposure."
  },
  [ConditionEnum.Fog]: {
    iconName: "weather-fog",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Foggy conditions.",
    subtitle: "Low visibility on the road, drive with caution."
  },
  [ConditionEnum.Dust]: {
    iconName: "weather-dust",
    gradient: ["#b79891", "#94716b"],
    title: "Dust in the air.",
    subtitle: "Air may feel dry and dusty, wear a mask if sensitive."
  },
  [ConditionEnum.Haze]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Hazy atmosphere.",
    subtitle: "Air looks blurry, sunlight may appear dimmed."
  },
  [ConditionEnum.Smoke]: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Smoky weather.",
    subtitle: "Smoke in the air reduces visibility and air quality."
  }
};