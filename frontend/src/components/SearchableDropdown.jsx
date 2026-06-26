import React, { useEffect, useRef, useState } from "react";

export default function SearchableDropdown({
  value,
  options,
  onChange,
  placeholder = "Select an option...",
  allowCustomInput = false,
  inline = false,
  bgColor = "bg-surface-low",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
    if (inline) return;

    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
        setSearch("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [inline]);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSelect(option) {
    onChange(option);
    setOpen(false);
    setSearch("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && allowCustomInput && search.trim()) {
      onChange(search.trim());
      setSearch("");
      if (!inline) setOpen(false);
    }
  }

  const panel = (
    <div
      className={`border border-outline ${bgColor} rounded-md overflow-hidden mt-1`}
    >
      <input
        autoFocus
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full bg-transparent px-3 py-2 text-sm text-on-surface outline-none placeholder:text-neutral-text"
        onClick={(e) => e.stopPropagation()}
      />

      {(search.trim() || filteredOptions.length > 0) && (
        <div className="border-t border-outline max-h-48 overflow-y-auto">
          {allowCustomInput && search.trim() && (
            <div
              onClick={() => handleSelect(search.trim())}
              className="px-3 py-2 text-sm cursor-pointer hover:bg-surface-high flex items-center gap-2"
            >
              <span className="text-primary font-medium">
                "{search.trim()}"
              </span>
              <span className="text-neutral-text text-xs">
                press enter to add
              </span>
            </div>
          )}

          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect(option)}
                className={`px-3 py-2 text-sm cursor-pointer hover:bg-surface-high text-on-surface${
                  option === value ? " bg-surface-high" : ""
                }`}
              >
                {option}
              </div>
            ))
          ) : !allowCustomInput || !search.trim() ? (
            <div className="px-3 py-2 text-sm text-neutral-text">
              No results found
            </div>
          ) : null}
        </div>
      )}
    </div>
  );

  if (inline) return panel;

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full border border-outline ${bgColor} rounded-md px-3 py-2 text-sm text-on-surface cursor-pointer flex items-center justify-between`}
      >
        <span className={value ? "text-on-surface" : "text-neutral-text"}>
          {value || placeholder}
        </span>

        <span
          className={`transition-transform duration-200 text-neutral-text text-xs${
            open ? " rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {open && panel}
    </div>
  );
}
