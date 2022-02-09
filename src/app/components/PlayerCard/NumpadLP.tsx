import { Player } from "app/state/types";
import { useState } from "react";
import { Numpad } from "./Numpad";

type Props = {
  player: Player;
  playerIndex: number;
};
export const NumpadLp = ({ player, playerIndex }: Props) => {
  const [displayNumpad, setDisplayerNumpad] = useState(false);

  return (
    <>
      {displayNumpad && (
        <Numpad
          player={player}
          playerIndex={playerIndex}
          hideNumpad={() => setDisplayerNumpad(false)}
        />
      )}
      <h2
        className="text-7xl text-white col-span-2"
        onClick={() => setDisplayerNumpad(true)}
      >
        {player.lp}
      </h2>
    </>
  );
};
