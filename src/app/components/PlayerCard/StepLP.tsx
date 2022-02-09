import { useGlobalDispatch } from "app/state/context";
import { MinusIconSolid, PlusIconSolid } from "../icons";
import { Player } from "app/state/types";

type Props = {
  player: Player;
  playerIndex: number;
};
export const StepLp = ({ player, playerIndex }: Props) => {
  const dispatch = useGlobalDispatch();

  return (
    <>
      <button
        onClick={() => dispatch({ type: "lp/decrement", playerIndex })}
        className="z-10 absolute left-0 h-full w-1/2 active:opacity-30 active:bg-white"
      />
      <button
        onClick={() => dispatch({ type: "lp/increment", playerIndex })}
        className="z-10 absolute right-0 h-full w-1/2 active:opacity-30 active:bg-white"
      />
      <View className="w-full grid grid-cols-4 relative">
        <span className="text-black opacity-20 text-4xl place-self-center">
          <MinusIconSolid />
        </span>
        <h2 className="text-7xl text-white col-span-2">{player.lp}</h2>
        <span className="text-black opacity-20 text-4xl place-self-center">
          <PlusIconSolid />
        </span>
      </View>
    </>
  );
};
