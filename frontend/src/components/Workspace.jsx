import React, { useState } from "react";
import Navbar from "./Navbar";
import CurrentGeneration from "./CurrentGeneration";
import EvolutionGraph from "./EvolutionGraph";
import SCREENS from "../Constants";
import { useScreen } from "../context/ScreenContext";

export default function Workspace() {
  const { currScreen } = useScreen();
  return (
    <div className="grid grid-rows-[64px_1fr] grid-cols-[1fr_350px]">
      <Navbar style="col-span-2 border-1" />
      {currScreen == SCREENS.CURRENT_GENERATION ? (
        <CurrentGeneration />
      ) : (
        <EvolutionGraph />
      )}
    </div>
  );
}
