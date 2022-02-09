import React, { createContext, useReducer, useContext } from "react";
import { initStore } from "../../mockStore";
import { reducers } from "./reducers";
import { GlobalState, Action } from "./types";

const GlobalCtxState = createContext<GlobalState | undefined>(undefined);
const GlobalCtxDispatch = createContext<React.Dispatch<Action> | undefined>(
  undefined
);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducers, initStore);
  return (
    <GlobalCtxState.Provider value={state}>
      <GlobalCtxDispatch.Provider value={dispatch}>
        {children}
      </GlobalCtxDispatch.Provider>
    </GlobalCtxState.Provider>
  );
};

// Use useContextState & useContextDispatch instead of useContext for performance optimisation is needed https://kentcdodds.com/blog/how-to-optimize-your-context-value
export const useGlobalState = () => {
  const ctxState = useContext(GlobalCtxState);
  if (ctxState === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return ctxState;
};

export const useGlobalDispatch = () => {
  const ctxDispatch = useContext(GlobalCtxDispatch);
  if (ctxDispatch === undefined) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }
  return ctxDispatch;
};

export const useGlobalCtx = (): [GlobalState, React.Dispatch<Action>] => [
  useGlobalState(),
  useGlobalDispatch(),
];
