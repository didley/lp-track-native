type State = {
  currentLp: number;
  calculation: "-" | "+";
  pendingVal: number;
};

export type Action =
  | { type: "setMinus" }
  | { type: "setAddition" }
  | { type: "setPendingVal"; value: number }
  | { type: "clear" }
  | { type: "half" }
  | { type: "addZeros"; zeros: "0" | "00" | "000" };

export const initState = (currentLp: number): State => ({
  currentLp,
  calculation: "-",
  pendingVal: 0,
});

export const numpadReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setMinus": {
      return { ...state, calculation: "-" };
    }

    case "setAddition": {
      return { ...state, calculation: "+" };
    }

    case "setPendingVal": {
      let newVal = state.pendingVal;
      const valLength = state.pendingVal.toString().length;

      if (state.pendingVal === 0) newVal = action.value;
      if (valLength < 5)
        newVal = parseInt(`${state.pendingVal}${action.value}`);

      return { ...state, pendingVal: newVal };
    }

    case "clear": {
      return { ...state, pendingVal: 0 };
    }

    case "half": {
      const halfLp = state.currentLp / 2;
      return { ...state, pendingVal: halfLp, calculation: "-" };
    }

    case "addZeros": {
      const { zeros } = action;

      let pendingVal = state.pendingVal;

      const valLength = pendingVal.toString().length;

      if (zeros === "0" && valLength < 5) pendingVal = state.pendingVal * 10;
      if (zeros === "00" && valLength < 4) pendingVal = state.pendingVal * 100;
      if (zeros === "000" && valLength < 3)
        pendingVal = state.pendingVal * 1000;

      return { ...state, pendingVal };
    }

    default:
      throw new Error(`Unhandled action type: ${action}`);
  }
};

export const selectNewLp = (numpadState: State) => {
  const { currentLp, calculation, pendingVal } = numpadState;
  if (calculation === "+") return currentLp + pendingVal;
  else return currentLp - pendingVal;
};
