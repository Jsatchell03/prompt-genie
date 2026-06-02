import { useState } from "react";
import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";
import { ScreenProvider } from "./context/ScreenContext";

function App() {
  return (
    <div className="h-screen grid grid-cols-[280px_1fr]">
      <Sidebar style="border-1" />
      <Workspace />
    </div>
  );
}

export default App;
