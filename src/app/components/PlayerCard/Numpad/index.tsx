import { Portal } from "app/components/Portal";
import { Player } from "app/state/types";
import { useReducer } from "react";
import { numpadReducer, initState, Action, selectNewLp } from "./reducer";
import { useGlobalDispatch } from "app/state/context";
import { NumpadBtn } from "./NumpadBtn";

type Props = {
  player: Player;
  playerIndex: number;
  hideNumpad: () => void;
};

type Key = { key: string; action: Action; color?: "gray" | "orange" };

export const Numpad = ({ player, playerIndex, hideNumpad }: Props) => {
  const globalDispatch = useGlobalDispatch();
  const [numpadState, dispatch] = useReducer(
    numpadReducer,
    initState(player.lp)
  );
  const newLp = selectNewLp(numpadState);
  const { currentLp, calculation, pendingVal } = numpadState;

  const keys: Key[] = [
    { key: "1", action: { type: "setPendingVal", value: 1 } },
    { key: "2", action: { type: "setPendingVal", value: 2 } },
    { key: "3", action: { type: "setPendingVal", value: 3 } },
    { key: "C", action: { type: "clear" }, color: "orange" },
    { key: "4", action: { type: "setPendingVal", value: 4 } },
    { key: "5", action: { type: "setPendingVal", value: 5 } },
    { key: "6", action: { type: "setPendingVal", value: 6 } },
    { key: "/2", action: { type: "half" }, color: "orange" },
    { key: "7", action: { type: "setPendingVal", value: 7 } },
    { key: "8", action: { type: "setPendingVal", value: 8 } },
    { key: "9", action: { type: "setPendingVal", value: 9 } },
    { key: "+", action: { type: "setAddition" }, color: "orange" },
    { key: "0", action: { type: "addZeros", zeros: "0" } },
    { key: "00", action: { type: "addZeros", zeros: "00" } },
    { key: "000", action: { type: "addZeros", zeros: "000" } },
    { key: "-", action: { type: "setMinus" }, color: "orange" },
  ];

  const handleApplyClick = () => {
    globalDispatch({
      type: "lp/set",
      playerIndex,
      value: newLp,
    });
    hideNumpad();
  };

  return (
    <Portal rootId="numpad-root">
      <View className="absolute h-screen w-screen flex">
        <View
          className="z-50 bg-gray-800 rounded-3xl select-none m-auto"
          style={{
            transform: `rotate(${player.cardRotation}deg)`,
          }}
        >
          <View className="bg-black h-28 m-4 p-4 rounded-xl text-white text-4xl">
            {currentLp} {calculation} {pendingVal}
          </View>
          <View className="grid grid-cols-4 grid-rows-5 place-items-center gap-2 m-3">
            {keys.map((key) => (
              <NumpadBtn
                onClick={() => dispatch(key.action)}
                key={key.key}
                color={key.color}
              >
                {key.key}
              </NumpadBtn>
            ))}
            <NumpadBtn color="last" onClick={handleApplyClick}>
              Apply to {player.name}
            </NumpadBtn>
          </View>
        </View>
      </View>
      <View className="absolute h-screen w-screen z-10" onClick={hideNumpad} />
    </Portal>
  );
};
