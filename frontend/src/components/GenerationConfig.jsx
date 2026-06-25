import React, { useState } from "react";
import LongInput from "./LongInput";
import SearchableDropdown from "./SearchableDropdown";

export default function GenerationConfig() {
  const [goal, setGoal] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [model, setModel] = useState("");

  const [config, setConfig] = useState({
    model: "",
    goal: "",
    userPrompt: "",
  });

  function handleRunEvolution() {
    setConfig({
      model,
      goal,
      userPrompt,
    });
  }

  function handleRegen() {
    setConfig({
      model,
      goal,
      userPrompt,
    });
  }
  if (
    goal !== config.goal ||
    userPrompt !== config.userPrompt ||
    model !== config.model
  ) {
    console.log(model);
    console.log(config);
  }
  return (
    <div className="flex flex-col flex-1 pb-2 min-h-0">
      <div className="m-2 pb-2 h-full overflow-y-auto">
        <div className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg mb-2">
          <h3 className="subheading mb-2">Model</h3>
          <SearchableDropdown
            value={model}
            options={["GPT-5", "GPT-5 Mini", "Claude Sonnet"]}
            onChange={setModel}
          />
        </div>
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

      {(goal !== config.goal ||
        userPrompt !== config.userPrompt ||
        model !== config.model) && (
        <div className="flex-1 flex w-full">
          <div
            onClick={handleRunEvolution}
            className="hover:bg-primary-highlight p-2 bg-primary m-2 rounded-md text-center flex-1"
          >
            <h2 className="heading-secondary">Run Evolution</h2>
          </div>
          <div
            onClick={handleRegen}
            className="hover:bg-primary-highlight p-2 bg-primary m-2 rounded-md text-center flex-1"
          >
            <h2 className="heading-secondary">Regenerate</h2>
          </div>
        </div>
      )}
    </div>
  );
}
