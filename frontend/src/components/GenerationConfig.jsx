import React, { useState } from "react";
import LongInput from "./LongInput";

export default function GenerationConfig({ setConfigOpen }) {
  const [goal, setGoal] = useState("");
  const [userPrompt, setUserPrompt] = useState("");

  const [config, setConfig] = useState({
    goal: "",
    userPrompt: "",
  });

  function handleRunEvolution() {
    setConfig({
      goal,
      userPrompt,
    });
  }

  return (
    <div className="bg-surface-high h-full flex flex-col pb-2">
      <h2 className="heading-secondary m-2">Configuration</h2>

      <div className="m-2 flex-1">
        <h3 className="subheading">Model</h3>
        <div className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg mb-2">
          <h3 className="subheading mb-2">Goal</h3>
          <LongInput value={goal} onChange={setGoal} />
        </div>
        <div className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg mb-2">
          <h3 className="subheading mb-2">User Prompt</h3>
          <LongInput value={userPrompt} onChange={setUserPrompt} />
        </div>
        <h3 className="subheading">Preferences</h3>
      </div>

      {(goal !== config.goal || userPrompt !== config.userPrompt) && (
        <div
          onClick={handleRunEvolution}
          className="hover:bg-primary-highlight p-2 bg-primary m-2 rounded-md text-center"
        >
          <h2 className="heading-secondary">Run Evolution</h2>
        </div>
      )}
    </div>
  );
}
