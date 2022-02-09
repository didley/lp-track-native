import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import React from "react";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text>hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "gray",
    marginTop: Constants.statusBarHeight,
  },
});
