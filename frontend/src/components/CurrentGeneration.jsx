import React, { useState } from "react";
import PromptArena from "./PromptArena";
import PromptConfig from "./PromptConfig";
export default function CurrentGeneration() {
  const [configOpen, setConfigOpen] = useState(true);
  return (
    <>
      <PromptArena style={configOpen ? "" : "col-span-2"} />
      {configOpen && <PromptConfig setConfigOpen={setConfigOpen} />}
    </>
  );
}
