const SCREENS = Object.freeze({
  CURRENT_GENERATION: "Current Generation",
  EVOLUTION_GRAPH: "Evolution Graph",
});

const PREFERENCE_OPTIONS = [
  "Concise Outputs",
  "Professional Tone",
  "Friendly Tone",
  "Use Bullet Points",
  "Avoid Jargon",
  "Include Examples",
  "Step-by-Step Format",
  "Formal Language",
  "Be Direct",
  "Be Thorough",
  "Use Code Snippets",
  "Explain Clearly",
  "Use Numbered Lists",
  "Avoid Repetition",
  "Structured Format",
  "Technical Detail",
  "Plain Language",
  "Action-Oriented",
];

const CHIP_COLORS = [
  "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  "bg-green-500/20 text-green-300 border border-green-500/30",
  "bg-pink-500/20 text-pink-300 border border-pink-500/30",
  "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  "bg-orange-500/20 text-orange-300 border border-orange-500/30",
];

export { PREFERENCE_OPTIONS, CHIP_COLORS };
export default SCREENS;
