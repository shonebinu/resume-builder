function AddEntryButton({ handleAdd }) {
  return (
    <button
      onClick={handleAdd}
      className="text-neutral-600 bg-neutral-200 p-1 flex justify-center rounded hover:outline hover:outline-2 hover:outline-neutral-400"
    >
      <svg
        style={{ height: "1.9rem", fill: "currentColor" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <title>plus-circle</title>
        <path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
      </svg>
    </button>
  );
}

export default AddEntryButton;
