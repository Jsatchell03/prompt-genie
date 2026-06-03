import React, { useState } from "react";
import PromptArena from "./PromptArena";
import GenerationConfig from "./GenerationConfig";
export default function CurrentGeneration() {
  const [configOpen, setConfigOpen] = useState(true);
  return (
    <>
      <PromptArena
        style={
          "bg-surface-base" +
          (configOpen ? " border-r-1 border-r-outline" : " col-span-2")
        }
      />
      {configOpen && <GenerationConfig setConfigOpen={setConfigOpen} />}
    </>
  );
}
