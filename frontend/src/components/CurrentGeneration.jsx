import React, { useState } from "react";
import PromptArena from "./PromptArena";
import GenerationConfig from "./GenerationConfig";
import PromptRankings from "./PromptRankings";

export default function CurrentGeneration({ isPanelOpen, togglePanel }) {
  const [activePanel, setActivePanel] = useState("config");

  return (
    <>
      <PromptArena />
      <div className="bg-surface-high border-l-1 border-outline h-[calc(100vh-64px)] flex flex-col min-h-0">
        <div className="flex items-center mt-2 px-2 pb-2 border-b-1 border-outline bg-surface-high">
          <button
            onClick={togglePanel}
            className="py-2 text-neutral-text hover:text-primary-highlight cursor-pointer text-2xl leading-none"
            title={isPanelOpen ? "Collapse panel" : "Expand panel"}
          >
            {isPanelOpen ? "›" : "‹"}
          </button>
          {isPanelOpen && (
            <div className="flex justify-around items-center flex-1">
              {["config", "rankings"].map((panel) => (
                <div
                  key={panel}
                  onClick={() => setActivePanel(panel)}
                  className={
                    "py-2 cursor-pointer" +
                    (activePanel === panel
                      ? " border-b-2 rounded-b-xs border-primary-highlight"
                      : "")
                  }
                >
                  <h3
                    className={
                      "subheading-variant hover:text-primary-highlight-variant capitalize" +
                      (activePanel === panel
                        ? " text-primary-highlight"
                        : " text-neutral-text")
                    }
                  >
                    {panel === "config" ? "Settings" : "Current Rankings"}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
        {isPanelOpen &&
          (activePanel === "config" ? (
            <GenerationConfig />
          ) : (
            <PromptRankings />
          ))}
      </div>
    </>
  );
}
