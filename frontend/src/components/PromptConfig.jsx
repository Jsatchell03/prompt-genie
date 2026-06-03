import React from "react";

export default function PromptConfig({ setConfigOpen }) {
  return (
    <div className="bg-surface-high">
      <h2 className="heading-secondary">Configuration</h2>
      <h3>Model</h3>
      <h3>Goal</h3>
      <h3>User Prompt</h3>
      <h3>Preferences</h3>
    </div>
  );
}
