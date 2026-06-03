import React, { useState } from "react";

export default function LongInput({ value, onChange }) {
  const [editing, setEditing] = useState(false);

  return (
    <div
      className="
        relative
        w-full
        min-h-[120px]
        p-3
        bg-surface-highest
        border border-outline
        rounded-xl
      "
    >
      <textarea
        autoFocus
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
            absolute inset-0
            w-full h-full
            p-3
            bg-transparent
            resize-none
            outline-none
            paragraph-primary
          "
      />
    </div>
  );
}
