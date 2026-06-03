import React from "react";
import SCREENS from "../Constants";
import NavButton from "./NavButton";
import { useScreen } from "../context/ScreenContext";

export default function Navbar({ style }) {
  const { currScreen } = useScreen();
  return (
    <div className={style + " bg-surface-low " + "flex items-center"}>
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
