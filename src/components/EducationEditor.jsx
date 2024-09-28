import EditorCard from "./EditorCard";
import EditorInputField from "./EditorInputField";

function EducationEditor({ educationDetails, setEducationDetails }) {
  const fields = [
    { label: "Institute", type: "text", key: "institute" },
    { label: "Study", type: "text", key: "study" },
    { label: "Timeline", type: "text", key: "timeline" },
    { label: "Score", type: "text", key: "score" },
  ];

  const handleChange = (id, key, value) => {
    const updatedEducationDetails = educationDetails.map((education) =>
      education.id === id ? { ...education, [key]: value } : { ...education }
    );
    setEducationDetails(updatedEducationDetails);
  };

  return (
    <EditorCard title="Education Details">
      {educationDetails.map((education) => (
        <div key={education.id} className="flex flex-col gap-2">
          {fields.map(({ label, type, key }) => (
            <EditorInputField
              key={`${education.id}-${key}`}
              label={label}
              type={type}
              value={education[key]}
              onChange={(e) => handleChange(education.id, key, e.target.value)}
            />
          ))}
        </div>
      ))}
    </EditorCard>
  );
}

export default EducationEditor;
