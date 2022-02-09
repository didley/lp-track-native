import { TitleBar } from "app/components/TitleBar";
import { PlayerCard } from "app/components/PlayerCard";
import { View, StyleSheet } from "react-native";
import React from "react";

export const Main = () => {
  return (
    <View
      // className="h-screen w-screen grid select-none bg-black"
      style={styles.container}
    >
      <PlayerCard playerIndex={1} />
      <View style={{ flex: 1 }}></View>
      {/* <TitleBar /> */}
      <PlayerCard playerIndex={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "gray",
  },
});
