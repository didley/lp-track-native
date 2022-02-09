import { useGlobalCtx } from "app/state/context";
import { select } from "app/state/selectors";
import { MinusIcon, PlusIcon, DelIcon } from "app/components/icons";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Button,
} from "react-native";
import React from "react";

type Props = {
  playerIndex: number;
};

export const Counters = ({ playerIndex }: Props) => {
  const [state, dispatch] = useGlobalCtx();

  const counters: number[] = select.player(state, playerIndex).counters;

  const Counter = ({ counter }) => {
    return (
      <View
      // className="text-5xl text-white border-y odd:border-r even:border-l flex justify-around relative"
      >
        <View style={styles.counter}>
          <Button
            // TODO title={counter > 0 ? <MinusIcon /> : <DelIcon />}
            title="-"
            onPress={() =>
              dispatch({
                type: "counter/decrement",
                playerIndex,
                counterIndex,
              })
            }
          />
          <Text>{counter}</Text>
          <Button
            // TODO title={<PlusIcon />}
            title="+"
            onPress={() =>
              dispatch({
                type: "counter/increment",
                playerIndex,
                counterIndex,
              })
            }
          />
        </View>
      </View>
    );
  };

  const renderCounter = ({ counter }) => {
    return <Counter counter={counter} />;
  };

  return (
    <>
      <Text style={styles.title}>Counters</Text>
      <SafeAreaView>
        <FlatList data={counters} renderItem={renderCounter} />
        {counters.length < 4 && (
          <Button
            title="Add counter"
            onPress={() => dispatch({ type: "counter/add", playerIndex })}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
  },
  counter: {
    width: "100%",
    justifyContent: "space-evenly",
  },
  icon: {
    opacity: 0.2,
    fontSize: 50,
  },
});
