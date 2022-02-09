export type Player = {
  name: string;
  color: PlayerColor;
  cardRotation: 0 | 90 | 180 | 270;
  counters: number[];
  lp: number;
};

type PlayerColor = "red" | "blue";

export type LpLogEntry = {
  lp: number;
  change?: number;
  surrender?: boolean;
}[];

export type GameConfig = {
  gameName: string;
  shortName?: string;
  surrenderAvailable: boolean;
  lpChangeType: "step" | "numpad";
  formats: {
    formatName: string;
    defaultLp: number;
  }[];
};

export type TrackerOpts = {
  gameConfigKey: string;
  gameName: string;
  formatName: string;
  surrenderAvailable: boolean;
  lpChangeType: "step" | "numpad";
  defaultLp: number;
};

type TitleBar = {
  menuOpen: boolean;
  settingsOpen: boolean;
  infoOpen: boolean;
};

export type GlobalState = {
  trackerOpts: TrackerOpts;
  players: Player[];
  lpLog: LpLogEntry[];
  gameConfigs: GameConfig[];
  titleBar: TitleBar;
};

export type Action =
  | { type: "lp/increment"; playerIndex: number }
  | { type: "lp/decrement"; playerIndex: number }
  | { type: "lp/set"; playerIndex: number; value: number }
  | { type: "counter/increment"; playerIndex: number; counterIndex: number }
  | { type: "counter/decrement"; playerIndex: number; counterIndex: number }
  | { type: "counter/add"; playerIndex: number }
  | { type: "counter/remove"; playerIndex: number; counterIndex: number }
  | { type: "game/reset" }
  | { type: "game/setTrackerOpts"; trackerOpts: TrackerOpts }
  | { type: "player/rotate"; playerIndex: number }
  | { type: "menu/close" }
  | { type: "menu/open" }
  | { type: "menu/settingsOpen" }
  | { type: "menu/infoOpen" };
