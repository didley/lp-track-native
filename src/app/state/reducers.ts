import { Action, GlobalState } from "./types";
import produce from "immer";

export const reducers = (state: GlobalState, action: Action) => {
  const { type } = action;

  switch (type) {
    case "lp/increment": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerLp = draftState?.players[playerIndex].lp;
          if (playerLp < 99) draftState.players[playerIndex].lp += 1;
        }
      });
    }
    case "lp/decrement": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;

          const playerLp = draftState?.players[playerIndex].lp;
          if (playerLp > 0) draftState.players[playerIndex].lp -= 1;
        }
      });
    }
    case "lp/set": {
      return produce(state, (draftState) => {
        const { playerIndex, value } = action;

        draftState.players[playerIndex].lp = value;
      });
    }
    case "counter/increment": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerCounter =
            draftState?.players[playerIndex].counters[action.counterIndex];
          if (playerCounter < 9)
            draftState.players[playerIndex].counters[action.counterIndex] += 1;
        }
      });
    }
    case "counter/decrement": {
      return produce(state, (draftState) => {
        if (draftState) {
          const { playerIndex } = action;
          const playerCounter =
            draftState?.players[playerIndex].counters[action.counterIndex];
          if (playerCounter === 0) {
            // removes counter
            draftState.players[playerIndex].counters.splice(
              action.counterIndex,
              1
            );
          } else if (playerCounter > 0) {
            draftState.players[playerIndex].counters[action.counterIndex] -= 1;
          }
        }
      });
    }
    case "counter/add": {
      return produce(state, (draftState) => {
        const { playerIndex } = action;

        if (draftState) {
          const playerCounters = draftState?.players[playerIndex].counters;
          if (playerCounters.length < 4)
            draftState.players[playerIndex].counters.push(0);
        }
      });
    }
    case "game/reset": {
      return produce(state, (draftState) => {
        const defaultLp = draftState.trackerOpts.defaultLp;
        draftState.players.map((player) => {
          player.lp = defaultLp;
          player.counters = [0];
          return null;
        });
      });
    }
    case "game/setTrackerOpts": {
      const { trackerOpts } = action;
      return produce(state, (draftState) => {
        draftState.trackerOpts = trackerOpts;
      });
    }
    case "player/rotate": {
      return produce(state, (draftState) => {
        const { playerIndex } = action;
        const cardRotation = draftState.players[playerIndex].cardRotation;

        if (cardRotation === 0)
          draftState.players[playerIndex].cardRotation = 180;
        else if (cardRotation === 180)
          draftState.players[playerIndex].cardRotation = 0;
      });
    }
    case "menu/close":
      return {
        ...state,
        titleBar: {
          menuOpen: false,
          settingsOpen: false,
          infoOpen: false,
        },
      };
    case "menu/open":
      return {
        ...state,
        titleBar: { menuOpen: true, settingsOpen: false, infoOpen: false },
      };
    case "menu/settingsOpen":
      return {
        ...state,
        titleBar: { menuOpen: true, settingsOpen: true, infoOpen: false },
      };
    case "menu/infoOpen":
      return {
        ...state,
        titleBar: { menuOpen: true, settingsOpen: false, infoOpen: true },
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
