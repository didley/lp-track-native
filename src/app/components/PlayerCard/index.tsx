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

  return (
    <View style={[styles.container, { backgroundColor: player.color }]}>
      <Text style={styles.playerName}>{player.name}</Text>
      <View style={styles.lpContainer}>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              dispatch({ type: "lp/decrement", playerIndex: playerIndex })
            }
            title="-"
            color="white"
            accessibilityLabel={`Subtract one life point from ${player.name}`}
          />
        </View>
        <Text style={styles.playerLp}>{player.lp}</Text>
        <View style={styles.btnContainer}>
          <Button
            onPress={() =>
              dispatch({ type: "lp/increment", playerIndex: playerIndex })
            }
            title="+"
            color="white"
            accessibilityLabel={`Subtract one life point from ${player.name}`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%",
    width: "100%",
    textAlign: "center",
  },
  lpContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  btnContainer: {
    justifyContent: "center",
    opacity: 0.15,
    backgroundColor: "black",
    borderRadius: 200,
    height: 50,
    width: 50,
    alignSelf: "center",
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
