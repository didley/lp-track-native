import { useGlobalCtx } from "app/state/context";
import React from "react";

export const GameModes = ({ className = "" }) => {
  const [state, dispatch] = useGlobalCtx();
  const { gameConfigs, trackerOpts } = state;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const gameConfigKey = e.target.value;
    const [gameName, formatName] = gameConfigKey.split(",,");
    const selectedGame =
      gameConfigs?.find((g) => g.gameName === gameName) ?? gameConfigs[0];
    const selectedFormat =
      selectedGame?.formats?.find((f) => f.formatName === formatName) ??
      selectedGame.formats[0];

    const trackerOpts = {
      gameConfigKey,
      gameName: selectedGame.shortName
        ? selectedGame.shortName
        : selectedGame.gameName,
      formatName: selectedFormat.formatName,
      surrenderAvailable: selectedGame?.surrenderAvailable,
      lpChangeType: selectedGame.lpChangeType,
      defaultLp: selectedFormat.defaultLp,
    };

    if (selectedGame && selectedFormat) {
      dispatch({ type: "game/setTrackerOpts", trackerOpts });
      dispatch({ type: "game/reset" });
      dispatch({ type: "menu/close" });
    }
  };

  return (
    <select
      value={trackerOpts.gameConfigKey}
      onChange={handleChange}
      className={className}
    >
      {gameConfigs &&
        gameConfigs.map((game) => (
          <optgroup label={game.gameName}>
            {game.formats.map((format) => (
              <option value={`${game.gameName},,${format.formatName}`}>
                {format.formatName} ({format.defaultLp}lp)
              </option>
            ))}
          </optgroup>
        ))}
    </select>
  );
};
