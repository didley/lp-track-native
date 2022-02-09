import { Main } from "./src/app/App";
import { GlobalProvider } from "./src/app/state/context";
import React from "react";

export default function App() {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
}
