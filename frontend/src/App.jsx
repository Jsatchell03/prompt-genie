import { useState } from "react";
import Navbar from "./components/Navbar";
import PromptArena from "./components/PromptArena";
import Sidebar from "./components/Sidebar";
import SideToggle from "./components/SideToggle";

function App() {
  return (
    <div className="h-screen grid grid-cols-[280px_1fr]">
      <Sidebar style="border-1" />
      <div className="grid grid-rows-[64px_1fr] grid-cols-[1fr_350px]">
        <Navbar style="col-span-2  border-1" />
        <PromptArena style="border-1" />
        <SideToggle style="border-1" />
      </div>
    </div>
  );
}

export default App;
