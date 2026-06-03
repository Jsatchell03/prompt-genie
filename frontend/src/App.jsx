import { useState } from "react";
import Workspace from "./components/Workspace";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="h-screen grid grid-cols-[280px_1fr]">
      <Sidebar style="border-r-1 border-r-outline" />
      <Workspace />
    </div>
  );
}

export default App;
