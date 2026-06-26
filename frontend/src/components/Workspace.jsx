import React, { useState } from "react";
import Navbar from "./Navbar";
import CurrentGeneration from "./CurrentGeneration";
import EvolutionGraph from "./EvolutionGraph";
import SCREENS from "../Constants";
import { useScreen } from "../context/ScreenContext";

export default function Workspace() {
  const { currScreen } = useScreen();
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const togglePanel = () => setIsPanelOpen((prev) => !prev);
  return (
    <div
      className={`grid grid-rows-[64px_1fr] h-full ${isPanelOpen ? "grid-cols-[1fr_350px]" : "grid-cols-[1fr_48px]"}`}
    >
      <Navbar />
      {currScreen == SCREENS.CURRENT_GENERATION ? (
        <CurrentGeneration isPanelOpen={isPanelOpen} togglePanel={togglePanel} />
      ) : (
        <EvolutionGraph />
      )}
    </div>
  );
}
