import React, { useState } from "react";
import { CHIP_COLORS } from "../Constants";

function chipColorIndex(str) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return h % CHIP_COLORS.length;
}

const MOCK_PROMPTS = [
  {
    id: "P-181",
    model: "claude-opus-4-8",
    preferences: ["Concise Outputs", "Avoid Jargon"],
    systemPrompt:
      "You are a helpful assistant specializing in technical writing. Your goal is to produce clear, concise, and accurate documentation. Always use active voice, avoid jargon unless necessary, and structure responses with headers when appropriate. When given code examples, explain them line by line.",
    tokenCount: 240,
    output:
      "Here is a clear and concise explanation of the requested topic. The key concepts are broken down into digestible sections, each building upon the previous. Code examples are annotated inline to aid understanding, and the language is kept accessible without sacrificing technical accuracy.",
    generationTime: 2.3,
  },
  {
    id: "P-182",
    model: "gpt-4o",
    preferences: ["Be Direct", "Technical Detail", "Use Code"],
    systemPrompt:
      "You are an expert assistant with deep knowledge across software engineering, product design, and business strategy. Approach every question with first-principles reasoning. Be direct and opinionated — avoid hedging. When you don't know something, say so explicitly rather than guessing. Tailor your response length to the complexity of the question.",
    tokenCount: 310,
    output:
      "Based on your request, the most effective approach involves three distinct phases. First, establish a clear baseline by auditing existing systems. Second, identify the highest-leverage intervention points. Third, implement changes iteratively with measurable checkpoints. This method avoids common pitfalls like premature optimization and scope creep.",
    generationTime: 1.8,
  },
  {
    id: "P-183",
    model: "gemini-2.5-pro",
    preferences: ["Friendly Tone", "Concise Outputs"],
    systemPrompt:
      "You are a concise and empathetic customer support assistant. Your primary goal is to resolve issues quickly and leave users feeling heard. Respond in a friendly, professional tone. Always acknowledge the user's frustration before offering a solution. Limit your response to 3–4 sentences unless more detail is explicitly requested.",
    tokenCount: 198,
    output:
      "I completely understand how frustrating that must be, and I'm sorry for the inconvenience. It looks like this issue is caused by a temporary sync delay on our end. To resolve it, please log out and back in — your data will be fully restored within a few minutes. If it persists, reply here and I'll escalate this right away.",
    generationTime: 1.2,
  },
  {
    id: "P-184",
    model: "claude-sonnet-4-6",
    preferences: ["Include Examples", "Structured Format"],
    systemPrompt:
      "You are a creative writing assistant specializing in short fiction and narrative prose. Help users develop compelling characters, vivid settings, and engaging plots. Lean into sensory detail and subtext. Avoid clichés and purple prose. When asked to generate a passage, match the tone and style the user has established.",
    tokenCount: 275,
    output:
      "The diner smelled of burnt coffee and something sweeter underneath — maple syrup, maybe, or the ghost of it. Cara slid into the booth nearest the window and watched the rain flatten the parking lot into a mirror. She hadn't come here for the food. She'd come because it was the last place he'd expect her to be, and right now that felt like enough.",
    generationTime: 3.1,
  },
  {
    id: "P-185",
    model: "gpt-4o",
    preferences: ["Technical Detail", "Use Code Snippets", "Be Thorough"],
    systemPrompt:
      "You are a rigorous code reviewer with expertise in TypeScript, React, and distributed systems. When reviewing code, prioritize correctness, then performance, then readability. Call out potential race conditions, memory leaks, and type-safety gaps. Be specific — reference line numbers and suggest concrete fixes, not just abstract principles.",
    tokenCount: 342,
    output:
      "Line 47: the `useEffect` dependency array omits `userId`, which means the subscription won't re-initialize if the user changes mid-session — this is a silent bug in multi-account flows. Line 62: casting the API response directly to `UserRecord` bypasses runtime validation; use a Zod schema or type guard here. Overall structure is clean, but the two issues above could cause data leaks in production.",
    generationTime: 2.7,
  },
];

function PromptCard({
  prompt,
  isFavorited,
  onToggleFavorite,
  lockedPreferences,
  onAddPreference,
}) {
  return (
    <div className="flex flex-col gap-3 bg-surface-high border border-outline rounded-lg p-3 flex-1 min-w-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="subheading bg-surface-highest px-2 py-0.5 rounded-md text-sm">
            {prompt.id}
          </span>
          <div className="flex items-center gap-2">
            {prompt.model && (
              <span className="bg-surface-base border border-outline text-neutral-text text-xs px-2 py-0.5 rounded-md">
                {prompt.model}
              </span>
            )}
            <button
              onClick={onToggleFavorite}
              className={`text-lg leading-none transition-colors ${
                isFavorited
                  ? "text-primary-highlight"
                  : "text-neutral-text opacity-40 hover:opacity-80"
              }`}
              title={isFavorited ? "Unfavorite" : "Favorite"}
            >
              {isFavorited ? "★" : "☆"}
            </button>
          </div>
        </div>
        {prompt.preferences?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {prompt.preferences.map((pref) => {
              const isLocked = lockedPreferences?.includes(pref);
              return (
                <span
                  key={pref}
                  className={`rounded-full pl-2.5 pr-1.5 py-0.5 text-xs flex items-center gap-1 ${CHIP_COLORS[chipColorIndex(pref)]}`}
                >
                  {pref}
                  <button
                    onClick={() => !isLocked && onAddPreference?.(pref)}
                    className={`leading-none transition-opacity ${
                      isLocked
                        ? "opacity-60 cursor-default"
                        : "hover:opacity-70 cursor-pointer"
                    }`}
                    title={
                      isLocked ? "Already locked" : "Add to locked preferences"
                    }
                  >
                    {isLocked ? "✓" : "+"}
                  </button>
                </span>
              );
            })}
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center justify-between mb-1">
          <span className="subheading-variant text-sm">System Prompt</span>
          <span className="paragraph-primary opacity-60">
            {prompt.tokenCount} tokens
          </span>
        </div>
        <div className="bg-surface-base font-mono text-xs rounded p-3 overflow-y-auto h-36 whitespace-pre-wrap leading-relaxed text-neutral-text">
          {prompt.systemPrompt}
        </div>
      </div>

      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between mb-1">
          <span className="subheading-variant text-sm">Output</span>
          <span className="paragraph-primary opacity-60">
            {prompt.generationTime}s
          </span>
        </div>
        <div className="bg-surface-base text-sm rounded p-3 overflow-y-auto flex-1 leading-relaxed paragraph-primary">
          {prompt.output}
        </div>
      </div>
    </div>
  );
}

export default function PromptArena({ lockedPreferences, onAddPreference }) {
  const [favorites, setFavorites] = useState(new Set());
  const [preference, setPreference] = useState(null);
  const [feedback, setFeedback] = useState("");

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handlePreference = (value) => {
    setPreference((prev) => (prev === value ? null : value));
  };

  const prefBtnClass = (value) =>
    `px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
      preference === value
        ? "bg-primary border-primary text-white"
        : "bg-surface-high border-outline text-neutral-text hover:bg-surface-highest"
    }`;

  return (
    <div className="h-[calc(100vh-64px)] overflow-y-auto  flex flex-col gap-4 p-3 bg-surface-base">
      <div className="flex gap-3 flex-1 min-h-0">
        <PromptCard
          prompt={MOCK_PROMPTS[0]}
          isFavorited={favorites.has(MOCK_PROMPTS[0].id)}
          onToggleFavorite={() => toggleFavorite(MOCK_PROMPTS[0].id)}
          lockedPreferences={lockedPreferences}
          onAddPreference={onAddPreference}
        />
        <PromptCard
          prompt={MOCK_PROMPTS[1]}
          isFavorited={favorites.has(MOCK_PROMPTS[1].id)}
          onToggleFavorite={() => toggleFavorite(MOCK_PROMPTS[1].id)}
          lockedPreferences={lockedPreferences}
          onAddPreference={onAddPreference}
        />
      </div>

      <div className="flex justify-center gap-3">
        <button
          className={prefBtnClass("left")}
          onClick={() => handlePreference("left")}
        >
          Prefer Left
        </button>
        <button
          className={prefBtnClass("tie")}
          onClick={() => handlePreference("tie")}
        >
          Tie
        </button>
        <button
          className={prefBtnClass("right")}
          onClick={() => handlePreference("right")}
        >
          Prefer Right
        </button>
      </div>

      <div className="flex flex-col gap-1">
        <span className="subheading-variant text-sm">Feedback</span>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Add feedback for the next generation..."
          rows={3}
          className="bg-surface-high border border-outline rounded-lg p-3 w-full text-sm resize-none paragraph-primary placeholder:opacity-40 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
    </div>
  );
}
