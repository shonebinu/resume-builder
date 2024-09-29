import { useState } from "react";
import EditorInputField from "./EditorInputField";

function EntryCard({ title, entry, fields, onChange, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleToggle}
        className="flex justify-between gap-5 border rounded border-neutral-300 p-2"
      >
        <span>{title}</span>
        <span>{isExpanded ? "🡩" : "🡫"}</span>
      </button>
      {isExpanded && (
        <>
          {fields.map(({ label, type, key }) => (
            <EditorInputField
              key={key}
              label={label}
              type={type}
              value={entry[key]}
              onChange={(e) => onChange(entry.id, key, e.target.value)}
            />
          ))}
          <button
            onClick={() => onDelete(entry.id)}
            className="text-sm border-2 rounded p-1 border-red-300 hover:bg-red-100"
          >
            Delete
          </button>
          <hr className="mb-2 border-t-2 border-neutral-300" />
        </>
      )}
    </div>
  );
}

export default EntryCard;
