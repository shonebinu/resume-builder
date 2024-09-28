function EditorInputField({ label, type, value, onChange }) {
  return (
    <label className="flex flex-col">
      <p>{label}</p>
      <input
        type={type}
        className="rounded border text-sm p-1 pl-2 bg-neutral-100 border-neutral-300"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default EditorInputField;
