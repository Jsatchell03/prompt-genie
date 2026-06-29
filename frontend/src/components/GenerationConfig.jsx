import React, { useState, useRef, useEffect } from "react";
import LongInput from "./LongInput";
import SearchableDropdown from "./SearchableDropdown";
import OutputPreferences from "./OutputPreferences";

const LLMModels = [
  // OpenAI
  "GPT-5",
  "GPT-5 Mini",
  "GPT-5 Nano",
  "GPT-4.1",
  "GPT-4.1 Mini",
  "GPT-4.1 Nano",
  "o3",
  "o3 Pro",
  "o4-mini",

  // Anthropic
  "Claude Opus 4",
  "Claude Sonnet 4",
  "Claude Haiku 4",

  // Google
  "Gemini 2.5 Pro",
  "Gemini 2.5 Flash",
  "Gemini 2.5 Flash-Lite",

  // Meta
  "Llama 4 Maverick",
  "Llama 4 Scout",
  "Llama 3.3 70B",
  "Llama 3.1 405B",
  "Llama 3.1 70B",
  "Llama 3.1 8B",

  // Mistral AI
  "Magistral",
  "Mistral Large",
  "Mistral Medium",
  "Mistral Small",
  "Codestral",
  "Pixtral Large",

  // xAI
  "Grok 4",
  "Grok 3",

  // DeepSeek
  "DeepSeek R1",
  "DeepSeek V3",

  // Alibaba
  "Qwen3 235B",
  "Qwen3 32B",
  "Qwen3 14B",
  "Qwen3 8B",

  // Cohere
  "Command A",
  "Command R+",
  "Command R",

  // AI21
  "Jamba Large",
  "Jamba Mini",

  // Microsoft
  "Phi-4",
  "Phi-4 Mini",

  // Amazon
  "Nova Premier",
  "Nova Pro",
  "Nova Lite",
  "Nova Micro",

  // IBM
  "Granite 4.0",

  // Moonshot AI
  "Kimi K2",

  // Tencent
  "Hunyuan Turbo S",

  // Zhipu AI
  "GLM-4.5",

  // 01.AI
  "Yi Large",
];

export default function GenerationConfig({ preferences, onPreferencesChange }) {
  const [goal, setGoal] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [models, setModels] = useState([]);
  const [showAddModel, setShowAddModel] = useState(false);
  const modelCardRef = useRef(null);

  const [config, setConfig] = useState({
    models: [],
    goal: "",
    userPrompt: "",
    preferences: [],
  });

  useEffect(() => {
    function handleClickOutside(e) {
      if (modelCardRef.current && !modelCardRef.current.contains(e.target))
        setShowAddModel(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function addModel(m) {
    if (!m || models.includes(m)) return;
    setModels([...models, m]);
    setShowAddModel(false);
  }

  function removeModel(m) {
    setModels(models.filter((x) => x !== m));
  }

  function handleRunEvolution() {
    setConfig({ models, goal, userPrompt, preferences });
  }

  function handleRegen() {
    setConfig({ models, goal, userPrompt, preferences });
  }

  const isDirty =
    goal !== config.goal ||
    userPrompt !== config.userPrompt ||
    JSON.stringify(models) !== JSON.stringify(config.models) ||
    JSON.stringify(preferences) !== JSON.stringify(config.preferences);

  return (
    <div className="bg-surface-high flex flex-col flex-1 pb-2 min-h-0 mt-2 ">
      <div className="m-2 pb-2 h-full overflow-y-auto">
        <div
          ref={modelCardRef}
          className="bg-surface-base p-2 pb-4 rounded-lg mb-2"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="subheading">Selected Models</h3>
            <button
              onClick={() => setShowAddModel((v) => !v)}
              className="text-primary hover:text-primary-highlight text-xl leading-none px-1"
            >
              +
            </button>
          </div>

          {showAddModel && (
            <div className="mb-3">
              <SearchableDropdown
                inline
                options={LLMModels.filter((m) => !models.includes(m))}
                onChange={addModel}
                placeholder="Search models..."
                bgColor="bg-surface-highest"
              />
            </div>
          )}

          {models.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {models.map((m) => (
                <span
                  key={m}
                  className="rounded-full px-3 py-1 text-sm flex items-center gap-1 bg-surface-highest text-on-surface border border-outline"
                >
                  {m}
                  <button
                    onClick={() => removeModel(m)}
                    className="hover:opacity-70 ml-1 leading-none"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg mb-2">
          <h3 className="subheading mb-2">Goal</h3>
          <LongInput value={goal} onChange={setGoal} />
        </div>

        <div className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg mb-2">
          <h3 className="subheading mb-2">User Prompt</h3>
          <LongInput value={userPrompt} onChange={setUserPrompt} />
        </div>

        <OutputPreferences value={preferences} onChange={onPreferencesChange} />
      </div>

      {isDirty && (
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
