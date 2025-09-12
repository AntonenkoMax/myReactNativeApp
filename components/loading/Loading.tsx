import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Loading...</Text>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#fdf6aa",
    paddingHorizontal: 30,
    paddingVertical: 100
  },
  header: {
    color: "2c2c2c",
    fontSize: 30
  }
});