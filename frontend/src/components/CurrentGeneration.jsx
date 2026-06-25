import React, { useState } from "react";
import PromptArena from "./PromptArena";
import GenerationConfig from "./GenerationConfig";
import PromptRankings from "./PromptRankings";

export default function CurrentGeneration() {
  const [activePanel, setActivePanel] = useState("config");

  const tabClass = (panel) =>
    activePanel === panel
      ? "subheading text-center flex-1 px-4 py-3 rounded-t-md border-1 border-outline bg-surface-high relative z-10 cursor-pointer"
      : "subheading text-center flex-1 px-4 py-3 rounded-t-md border-1 border-outline bg-surface-base cursor-pointer";

  return (
    <>
      <PromptArena style="bg-surface-base border-r-1 border-r-outline" />
      <div className="bg-surface-high h-[calc(100vh-64px)] flex flex-col min-h-0">
        <div className="flex items-end border-b-1 border-outline">
          <div
            className={tabClass("config")}
            onClick={() => setActivePanel("config")}
          >
            Config
          </div>
          <div
            className={tabClass("rankings")}
            onClick={() => setActivePanel("rankings")}
          >
            Rankings
          </div>
        </div>
        {activePanel === "config" ? <GenerationConfig /> : <PromptRankings />}
      </div>
    </>
  );
}
