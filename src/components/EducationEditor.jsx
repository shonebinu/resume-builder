import EditorCard from "./EditorCard";
import EntryCard from "./EntryCard";
import AddEntryButton from "./AddEntryButton";

function EducationEditor({ educationDetails, setEducationDetails }) {
  const fields = [
    { label: "Study", type: "text", key: "study" },
    { label: "Institute", type: "text", key: "institute" },
    { label: "Timeline", type: "text", key: "timeline" },
    { label: "Score", type: "text", key: "score" },
  ];

  const handleChange = (id, key, value) => {
    const updatedEducationDetails = educationDetails.map((education) =>
      education.id === id ? { ...education, [key]: value } : { ...education }
    );
    setEducationDetails(updatedEducationDetails);
  };

  const handleDelete = (id) => {
    const updatedEducationDetails = educationDetails
      .filter((education) => education.id !== id)
      .map((education) => ({ ...education }));
    setEducationDetails(updatedEducationDetails);
  };

  const handleAdd = () => {
    const updatedEducationDetails = educationDetails.map((education) => ({
      ...education,
    }));

    updatedEducationDetails.push({
      id: crypto.randomUUID(),
      study: "New Education",
      institute: "",
      timeline: "",
      score: "",
    });

    setEducationDetails(updatedEducationDetails);
  };

  return (
    <EditorCard title="Education Details">
      {educationDetails.map((education) => (
        <EntryCard
          key={education.id}
          title={education.study}
          entry={education}
          fields={fields}
          onChange={handleChange}
          onDelete={handleDelete}
        />
      ))}
      <AddEntryButton handleAdd={handleAdd} />
    </EditorCard>
  );
}

export default EducationEditor;
