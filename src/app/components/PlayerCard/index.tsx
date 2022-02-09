import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Player } from "app/state/types";
import { useGlobalDispatch } from "app/state/context";

type Props = {
  player: Player;
  playerIndex: number;
};

export const PlayerCard = ({ player, playerIndex }: Props) => {
  const dispatch = useGlobalDispatch();
  console.log(player.lp);

  return (
    <View style={[styles.container, { backgroundColor: player.color }]}>
      <Text style={styles.playerName}>{player.name}</Text>
      <Button
        onPress={() =>
          dispatch({ type: "lp/decrement", playerIndex: playerIndex })
        }
        title="minus"
        color="white"
        accessibilityLabel={`Subtract one life point from ${player.name}`}
      />
      <Text style={styles.playerLp}>{player.lp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "100%",
    textAlign: "center",
  },
  playerName: {
    color: "white",
    fontSize: 40,
    marginVertical: 4,
    paddingVertical: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
  playerLp: {
    color: "white",
    fontSize: 80,
    marginVertical: 4,
    paddingVertical: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
});
