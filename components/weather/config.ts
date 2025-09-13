import { ColorValue } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ConditionEnum } from "../../shared/types";

type IoniconName = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

export const weatherOptions: Record<ConditionEnum, {
  iconName: IoniconName;
  gradient: [ColorValue, ColorValue, ...ColorValue[]];
}> = {
  [ConditionEnum.Thunderstorm]: {
    iconName: "weather-lightning",
    gradient: ["#141e30", "#243b55"]
  },
  [ConditionEnum.Clouds]: {
    iconName: "clouds",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Drizzle]: {
    iconName: "weather-partly-rainy",
    gradient: ["#3a7bd5", "#3a6073"]
  },
  [ConditionEnum.Rain]: {
    iconName: "weather-rainy",
    gradient: ["#000046", "#1cb5e0"]
  },
  [ConditionEnum.Snow]: {
    iconName: "weather-snowy",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Clear]: {
    iconName: "weather-sunny",
    gradient: ["#757f9a", "#d7dde8"]
  },
  [ConditionEnum.Mist]: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"]
  },
  [ConditionEnum.Tornado]: {
    iconName: "weather-tornado",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Squall]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Ash]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Sand]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Fog]: {
    iconName: "weather-fog",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Dust]: {
    iconName: "weather-dust",
    gradient: ["#b79891", "#94716b"]
  },
  [ConditionEnum.Haze]: {
    iconName: "format-clear",
    gradient: ["#83a4d4", "#b6fbff"]
  },
  [ConditionEnum.Smoke]: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"]
  }
};