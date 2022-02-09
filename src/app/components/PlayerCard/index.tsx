import { useGlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";
import { Counters } from "./Counters";
import { RotateIcon } from "app/components/icons";
import { useState } from "react";
import { StepLp } from "./StepLP";
import { NumpadLp } from "./NumpadLP";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Constants from "expo-constants";

type Props = { playerIndex: number };

export const PlayerCard = ({ playerIndex }: Props) => {
  const [state, dispatch] = useGlobalCtx();
  const player = select.player(state, playerIndex);
  // const [rotation, setRotation] = useState<number>(() => player.cardRotation); // TODO

  // const handleRotation = () => {
  //   dispatch({ type: "player/rotate", playerIndex });
  //   setRotation((prev) => prev + 190);
  //   setTimeout(() => setRotation((prev) => prev - 10), 200);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.playerName}>{player.name}</Text>
      {/* <View className="my-2 border-y flex justify-around relative">
        {state.trackerOpts.lpChangeType === "step" ? (
          <StepLp player={player} playerIndex={playerIndex} />
        ) : (
          <NumpadLp player={player} playerIndex={playerIndex} />
        )}
      </View> */}
      <Counters playerIndex={playerIndex} />
      {/* {playerIndex > 0 && (
        <button
          // onClick={handleRotation}
          className="absolute bottom-0 mb-5 right-0 mr-5 w-8 h-8 opacity-30"
        >
          <RotateIcon />
        </button>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // transform: `rotate(${rotation}deg)`, // TODO
    // transition: "0.2s",
    backgroundColor: "blue", // TODO | "red"
    height: "40%",
    width: "100%",
    textAlign: "center",
  },
  playerName: {
    color: "white",
    fontSize: 40,
    marginTop: Constants.statusBarHeight,
    marginVertical: 4,
    paddingVertical: 4,
    fontWeight: "bold",
    textAlign: "center",
  },
});
