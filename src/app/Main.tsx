import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { PlayerCard } from "./components/PlayerCard";
import { useGlobalState } from "./state/context";

export const Main = () => {
  const { players } = useGlobalState();

  return (
    <View style={styles.container}>
      <PlayerCard player={players[0]} playerIndex={0} />
      <PlayerCard player={players[1]} playerIndex={1} />
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
