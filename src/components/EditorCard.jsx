function EditorCard({ title, children }) {
  return (
    <div className="flex flex-col p-6 rounded gap-3 bg-neutral-50">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}

export default EditorCard;
