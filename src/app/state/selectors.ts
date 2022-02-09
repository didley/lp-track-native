import { GlobalState } from "./types";

export const select = {
  player: (state: GlobalState, playerIndex: number) =>
    state?.players[playerIndex],
};
