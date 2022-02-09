import { TitleBarMenu } from "./TitleBarMenu";
import { useGlobalCtx } from "app/state/context";
import { ChevronDownIcon } from "../icons";
import { useState } from "react";
import { OverlayPortal } from "../OverlayPortal";

export const TitleBar = () => {
  const [state, dispatch] = useGlobalCtx();
  const [displayResetConfirmation, setDisplayResetConfirmation] =
    useState(false);
  const { trackerOpts, players, titleBar } = state;
  const { gameName, formatName, defaultLp } = trackerOpts;

  let title = `${gameName} - ${formatName}`;

  if (players[0].lp === 0) title = `${players[1].name} wins!`;
  if (players[1].lp === 0) title = `${players[0].name} wins!`;
  if (players[0].lp === 0 && players[1].lp === 0) title = "Draw";

  const handleReset = () => {
    dispatch({ type: "game/reset" });
    setDisplayResetConfirmation(false);
  };

  return (
    <View className="bg-black text-white flex w-full text-center items-center justify-between">
      {displayResetConfirmation && (
        <OverlayPortal
          closePortalHandler={() => setDisplayResetConfirmation(false)}
        >
          <View className="p-14 text-center">
            <h4>Reset game?</h4>
            <button
              onClick={() => setDisplayResetConfirmation(false)}
              className="w-20 p-3 m-5 border rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="w-20 p-3 m-5 border rounded-lg"
            >
              Reset
            </button>
          </View>
        </OverlayPortal>
      )}
      {titleBar.menuOpen ? (
        <TitleBarMenu />
      ) : (
        <>
          <button
            onClick={() => setDisplayResetConfirmation(true)}
            className="w-20"
          >
            Reset
          </button>
          <View className="grid grow">
            <h1 className="text-xl text-white m-auto">{title}</h1>
          </View>

          <button
            className="w-20 flex items-center"
            onClick={() => dispatch({ type: "menu/open" })}
          >
            <ChevronDownIcon className="w-4 h-4" />
            Menu
          </button>
        </>
      )}
    </View>
  );
};
