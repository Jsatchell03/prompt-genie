import React, { useState, useRef, useEffect } from "react";
import { PREFERENCE_OPTIONS, CHIP_COLORS } from "../Constants";
import SearchableDropdown from "./SearchableDropdown";

function chipColorIndex(str) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) & 0xffff;
  return h % CHIP_COLORS.length;
}

export default function OutputPreferences({ value, onChange }) {
  const [showAddPreference, setShowAddPreference] = useState(false);

  const prefCardRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (prefCardRef.current && !prefCardRef.current.contains(e.target)) {
        setShowAddPreference(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function addPreference(pref) {
    const trimmed = pref.trim();
    if (!trimmed || value.includes(trimmed)) return;
    onChange([...value, trimmed]);
    setShowAddPreference(false);
  }

  function removePreference(pref) {
    onChange(value.filter((p) => p !== pref));
  }

  return (
    <div
      ref={prefCardRef}
      className="border-1 border-outline bg-surface-base p-2 pb-4 rounded-lg"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="subheading">Output Preferences</h3>
        <button
          onClick={() => setShowAddPreference((v) => !v)}
          className="text-primary hover:text-primary-highlight text-xl leading-none px-1"
        >
          +
        </button>
      </div>

      {showAddPreference && (
        <div className="mb-3">
          <SearchableDropdown
            inline
            allowCustomInput
            options={PREFERENCE_OPTIONS.filter((opt) => !value.includes(opt))}
            onChange={addPreference}
            placeholder="Search or type a preference..."
          />
        </div>
      )}

      {value.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {value.map((pref) => (
            <span
              key={pref}
              className={`rounded-full px-3 py-1 text-sm flex items-center gap-1 ${CHIP_COLORS[chipColorIndex(pref)]}`}
            >
              {pref}
              <button
                onClick={() => removePreference(pref)}
                className="hover:opacity-70 ml-1 leading-none"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
