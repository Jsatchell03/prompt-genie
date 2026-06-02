import React from "react";
import SCREENS from "../Constants";
import { useScreen } from "../context/ScreenContext";
export default function NavButton({ screen, active }) {
  const { setCurrScreen } = useScreen();
  return (
    <div
      onClick={() => setCurrScreen(screen)}
      className={"ml-2 py-2" + (active ? " border-b-2 rounded-b-xs" : "")}
    >
      <h3 className={"hover:text-red-400" + (active ? " text-red-500" : "")}>
        {screen}
      </h3>
    </div>
  );
}
