import React, { useEffect, useRef, useState } from "react";

export default function SearchableDropdown({
  value,
  options,
  onChange,
  placeholder = "Select an option...",
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef(null);

  useEffect(() => {
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
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSelect(option) {
    onChange(option);
    setOpen(false);
    setSearch("");
  }

  return (
    <div className="relative w-full paragraph-primary" ref={containerRef}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="w-full min-h-[64px] p-3 bg-surface-highest border border-outline rounded-xl cursor-pointer flex items-center justify-between"
      >
        <span className={value ? "" : "text-text-muted"}>
          {value || placeholder}
        </span>

        <span
          className={`transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface-highest border border-outline rounded-xl shadow-lg z-50 overflow-hidden">
          <input
            autoFocus
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full p-3 bg-surface-highest border-b border-outline outline-none"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => handleSelect(option)}
                  className={`p-3 cursor-pointer hover:bg-surface-high ${
                    option === value ? "bg-surface-high" : ""
                  }`}
                >
                  {option}
                </div>
              ))
            ) : (
              <div className="p-3 text-text-muted">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
