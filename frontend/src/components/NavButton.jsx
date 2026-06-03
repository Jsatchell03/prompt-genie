import React from "react";
import SCREENS from "../Constants";
import { useScreen } from "../context/ScreenContext";
export default function NavButton({ screen, active }) {
  const { setCurrScreen } = useScreen();
  return (
    <div
      onClick={() => setCurrScreen(screen)}
      className={
        "ml-2 py-2" +
        (active ? " border-b-2 rounded-b-xs border-primary-highlight" : "")
      }
    >
      <h3
        className={
          " subheading-variant hover:text-primary-highlight-variant" +
          (active ? " text-primary-highlight" : " text-neutral-text")
        }
      >
        {screen}
      </h3>
    </div>
  );
}
