import React from "react";
import SCREENS from "../Constants";
import NavButton from "./NavButton";
import { useScreen } from "../context/ScreenContext";

export default function Navbar() {
  const { currScreen } = useScreen();
  return (
    <div className="col-span-2 bg-surface-base border-b-1 border-outline flex items-center">
      {Object.keys(SCREENS).map((screen, index) => (
        <NavButton
          screen={SCREENS[screen]}
          active={currScreen == SCREENS[screen]}
          key={index}
        />
      ))}
    </div>
  );
}
