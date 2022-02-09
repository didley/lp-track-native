import { useGlobalCtx } from "app/state/context";
import { GameModes } from "../GameModes";
import { ChevronLeftIcon, InfoIcon, SettingsIcon } from "../icons";
import { InfoSection } from "./InfoSection";
import { MenuDialog } from "./MenuDialog";

export const TitleBarMenu = () => {
  const [state, dispatch] = useGlobalCtx();
  const { titleBar } = state;
  return (
    <>
      <InfoIcon
        className="w-8 mx-8 text-blue-500"
        onClick={() => dispatch({ type: "menu/infoOpen" })}
      />
      {titleBar.infoOpen && (
        <MenuDialog>
          <InfoSection />
        </MenuDialog>
      )}

      <SettingsIcon
        className="w-8 mx-8"
        onClick={() => dispatch({ type: "menu/settingsOpen" })}
      />
      {titleBar.settingsOpen && (
        <MenuDialog>
          <h6>Game</h6>
          <GameModes className="p-2 text-gray-900 bg-gray-50 rounded-lg w-full border" />
        </MenuDialog>
      )}

      <button
        className="w-20 flex items-center"
        onClick={() => dispatch({ type: "menu/close" })}
      >
        <ChevronLeftIcon className="w-4 h-4" /> Menu
      </button>
    </>
  );
};
