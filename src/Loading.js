import React from "react";

import { View, StyleSheet, Text, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>Секунду...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 20,
  },
});
