function EditorInputField({ label, type, value, onChange }) {
  return (
    <label className="flex flex-col">
      <p>{label}</p>
      <input
        type={type}
        className="rounded-md border-2 text-sm p-1 pl-2"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

export default EditorInputField;
