import React, { FC } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { LinearGradient } from "expo-linear-gradient";
import { ConditionEnum } from "../../shared/types";
import { weatherOptions } from "./config";


interface WeatherProps {
  temp: number;
  condition: ConditionEnum;
}

const Weather: FC<WeatherProps> = ({ temp, condition }) => {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
        <Text style={styles.temp}>{Math.round(temp)}°</Text>
        <Text>{condition}</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: 'white'
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});